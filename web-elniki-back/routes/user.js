const express = require('express');
const router = express.Router();
const conn = require('../db');

// GET запрос для получения всех пользователей
router.get('/users', async (req, res) => {
    conn.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.error('Ошибка при получении пользователей:', err);
            res.status(500).json({ error: 'Ошибка сервера' });
            return;
        }
        res.json(result);
    });
});

module.exports = router;
