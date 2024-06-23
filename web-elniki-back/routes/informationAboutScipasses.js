const express = require('express');
const router = express.Router();
const connection = require('../db');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/api/skiPasses', authenticateToken, (req, res) => {
    const { userId } = req.query;
    connection.query('SELECT SkiPassID, PurchaseDate, StartDate, EndDate, number_of_skipasses FROM purchasedskipasses WHERE UserID = ?', [userId], (error, skipPassResults) => {
        if (error) {
            console.error('Ошибка при получении скипассов:', error);
            res.status(500).json({ error: 'Ошибка сервера' });
            return;
        }

        // Создаем массив промисов для запросов типов скипассов
        const queries = skipPassResults.map((skiPass) => (
            new Promise((resolve, reject) => {
                connection.query('SELECT skiPassType FROM skipasstypes WHERE id = ?', [skiPass.SkiPassID], (error, typeResults) => {
                    if (error) {
                        console.error('Ошибка при получении типа скипасса:', error);
                        reject(error);
                    } else {
                        skiPass.skiPassType = typeResults[0].skiPassType;
                        resolve();
                    }
                });
            })
        ));

        // Дожидаемся завершения всех запросов и отправляем данные
        Promise.all(queries)
            .then(() => res.json(skipPassResults))
            .catch(error => res.status(500).json({ error: 'Ошибка сервера' }));
    });
});


module.exports = router;
