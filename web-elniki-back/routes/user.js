const express = require('express');
const router = express.Router();
const conn = require('../db');
const bcrypt = require('bcrypt');

// GET запрос для получения всех пользователей
router.get('/users', (req, res) => {
    conn.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.error('Ошибка при получении пользователей:', err);
            res.status(500).json({ error: 'Ошибка сервера' });
            return;
        }
        res.json(result);
    });
});

// POST запрос для регистрации пользователя
router.post('/reg', async (req, res) => {
    var {
        Name,
        Surname,
        Email,
        Password
    } = req.body;
    Password = await bcrypt.hash(Password, 10);
    console.log(Password)
    conn.query(
        'INSERT INTO users (Name, Surname, Email, Password) VALUES (?, ?, ?, ?)',
        [Name, Surname, Email, Password], (err, result) => {
            if (err) {
                console.error('Ошибка при регистрации пользователя:', err);
                res.status(500).json({ error: 'Ошибка сервера' });
                return;
            }
            res.json({ Email, Password });
        });
});

module.exports = router;
