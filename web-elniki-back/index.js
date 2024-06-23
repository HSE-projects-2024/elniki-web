const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);

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
});

module.exports = { app, server };
