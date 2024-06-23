const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/getSkipassTypes', (req, res) => {
    connection.query('SELECT id, skiPassType FROM skipasstypes', (error, results) => {
        if (error)  {
            console.error('Ошибка при получении пользователей:', err);
            res.status(500).json({ error: 'Ошибка сервера' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;