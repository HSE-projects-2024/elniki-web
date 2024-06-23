const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/getSkipassPrice', (req, res) => {
    const { SkiPassTypeId, quantity } = req.query;

    if (isNaN(Number(SkiPassTypeId)) || !Number.isInteger(Number(SkiPassTypeId))) {
        return res.status(400).json({ error: 'SkiPassTypeId должен быть целым числом' });
    }

    const skiPassTypeIdInt = parseInt(SkiPassTypeId, 10);
    const quantityInt = parseInt(quantity, 10);

    connection.query('SELECT Price FROM skipasses WHERE SkiPassTypeId = ?', skiPassTypeIdInt, (error, results) => {
        if (error) {
            console.error('Ошибка при получении цены:', error);
            res.status(500).json({ error: 'Ошибка сервера' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Цена для указанного типа пропуска не найдена' });
            return;
        }

        const price = results[0].Price;
        const updatedPrice = price * quantityInt;

        res.status(200).json({ price: updatedPrice });
    });
});

module.exports = router;
