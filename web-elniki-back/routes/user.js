const express = require('express');
const router = express.Router();
const conn = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// GET запрос для получения всех пользователей
router.get('/users', (req, res) => {
    conn.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.error('Ошибка при получении пользователей:', err);
            return res.status(500).json({ error: 'Ошибка сервера' });
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
    conn.query(
        'INSERT INTO users (Name, Surname, Email, Password) VALUES (?, ?, ?, ?)',
        [Name, Surname, Email, Password], (err, result) => {
            if (err) {
                console.error('Ошибка при регистрации пользователя:', err);
                return res.status(500).json({ error: 'Ошибка сервера' });
            }
            res.json({ Email, Password });
        });
});

// POST запрос для авторизации пользователя
router.post('/login', (req, res) => {
    const {
        Email,
        Password
    } = req.body;
    conn.query(
        'SELECT * FROM users WHERE Email = ?', [Email], async (err, user) => {
            if (err) {
                console.error('Ошибка при авторизации пользователя:', err);
                return res.status(500).json({ error: 'Ошибка сервера' });
            }
            if (!user) {
                return res.status(401).json({ message: 'Неверные данные' });
            }
            const isValidPassword = await bcrypt.compare(Password, user[0].Password);
            if (isValidPassword) {
                const token = jwt.sign({ userId: user[0].UserID }, process.env.JWT_SECRET, { expiresIn: '7d' });
                res.json({ token });
            }
            else {
                return res.status(401).json({ message: 'Неверные данные' });
            }
        });
});

module.exports = router;
