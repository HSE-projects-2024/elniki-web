const express = require('express');
const router = express.Router();
const conn = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authMiddleware');
require('dotenv').config();

// GET запрос для получения всех пользователей
router.get('/users', authenticateToken, (req, res) => {
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
    conn.query(
        'SELECT * FROM users WHERE Email = ?', [Email], async (err, user) => {
            if (user.length > 0) {
                return res.status(401).json({ message: 'Неверные данные' });
            }
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
        }
    )
});

// POST запрос для авторизации пользователя
router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;

    try {
        conn.query('SELECT * FROM users WHERE Email = ?', [Email], async (err, results) => {
            if (err) {
                console.error('Ошибка при авторизации пользователя:', err);
                return res.status(500).json({ error: 'Ошибка сервера' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Неверные данные' });
            }

            const user = results[0];

            const isValidPassword = await bcrypt.compare(Password, user.Password);

            if (isValidPassword) {
                const token = jwt.sign({ userId: user.UserID }, process.env.JWT_SECRET, { expiresIn: '7d' });
                return res.json({ UserID: user.UserID, jwtToken: token });
            } else {
                return res.status(401).json({ message: 'Неверные данные' });
            }
        });
    } catch (error) {
        console.error('Ошибка при авторизации пользователя:', error);
        return res.status(500).json({ error: 'Ошибка сервера' });
    }
});

router.post('/submitContactForm', async (req, res) => {
    const { message, email, sendCopy } = req.body;

    try {
        // Вставляем данные в таблицу contacts
        conn.query(
            'INSERT INTO contacts (Message, Email, SendCopy) VALUES (?, ?, ?)',
            [message, email, sendCopy],
            (err, results) => {
                if (err) {
                    console.error('Ошибка при вставке данных в таблицу contacts:', err);
                    return res.status(500).json({ error: 'Ошибка сервера' });
                }
                // В случае успешной вставки возвращаем успешный ответ
                return res.status(200).json({ message: 'Данные успешно добавлены в таблицу contacts' });
            }
        );
    } catch (error) {
        console.error('Ошибка при обработке данных формы:', error);
        return res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Маршрут для получения данных скипассов
router.get('/getSkipasses', (req, res) => {
    const query = `
        SELECT s.SkiPassID, s.ValidityPeriod, s.Price, s.Description, st.skiPassType, s.ChildPrice
        FROM skipasses s
        JOIN skipasstypes st ON s.SkiPassTypeId = st.id;
    `;
    conn.query(query, (err, results) => {
        if (err) {
            console.error('Ошибка выполнения запроса:', err);
            res.status(500).send('Ошибка сервера');
            return;
        }
        res.json(results);
    });
});

module.exports = router;
