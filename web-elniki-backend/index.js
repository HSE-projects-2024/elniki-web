import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express()
app.use(cors())

const connection = mysql.createConnection ({
    host: "localhost",
    user: 'root',
    password: 'mysql',
    database: 'skiresortapp'
})

// Подключаемся к базе данных
connection.connect();

// Запрос к базе данных для получения значений типов ски-пассов
connection.query('SELECT id, skiPassType FROM skipasstypes', (error, results, fields) => {
    if (error) throw error;

    // Передаем данные в frontend
    app.get('/getSkipassTypes', (req, res) => {
        res.json(results);
    });
});

app.get('/', (re, res) => {
    return res.json("From backend side");
})

app.listen(5000, () => {
    console.log('started');
})