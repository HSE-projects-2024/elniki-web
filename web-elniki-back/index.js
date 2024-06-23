import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json());


<<<<<<< Updated upstream
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'skiresortapp' 
=======
// Маршрут для получения данных скипассов
app.get('/getSkipasses', (req, res) => {
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

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
>>>>>>> Stashed changes
});

db.connect((err) => {
    if (err) {
        console.error('Ошибка соединения с БД:', err);
        return;
    }
    console.log('Соединение с БД установлено');
});

// Маршрут для получения данных скипассов
app.get('/getSkipasses', (req, res) => {
    const query = `
        SELECT s.SkiPassID, s.ValidityPeriod, s.Price, s.Description, st.skiPassType, s.ChildPrice
        FROM skipasses s
        JOIN skipasstypes st ON s.SkiPassTypeId = st.id;
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Ошибка выполнения запроса:', err);
            res.status(500).send('Ошибка сервера');
            return;
        }
        res.json(results);
    });
});


// Запрос к базе данных для получения значений типов ски-пассов
db.query('SELECT id, skiPassType FROM skipasstypes', (error, results, fields) => {
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