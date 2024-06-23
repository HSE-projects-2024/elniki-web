const mysql = require('mysql');

// Подключение к БД
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'skiresortapp'
});

conn.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err);
        return;
    }
    console.log('Подключение к базе данных успешно установлено');
});

module.exports = conn;