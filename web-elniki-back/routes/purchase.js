const express = require('express');
const router = express.Router();
const connection = require('../db');



router.post('/purchaseSkipass', (req, res) => {
    const { userId, selectedType, quantity, date } = req.body;
    const purchaseDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const startDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

    const sql = `INSERT INTO purchasedskipasses (UserID, SkiPassID, PurchaseDate, StartDate, EndDate, number_of_skipasses) 
    VALUES (8, ${parseInt(selectedType)}, '${purchaseDate}', '${startDate}', '2024-02-12 00:00:00', ${parseInt(quantity)})`;

    connection.query(sql, (error, result) => {
        if (error) {
            console.error('Error inserting data:', error);
            res.status(500).send('Error inserting data into the database');
        } else {
            console.log('Data inserted successfully:', result);
            res.send('Data received and inserted into the database successfully!');
        }
    });
});

module.exports = router;
