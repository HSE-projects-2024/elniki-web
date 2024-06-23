import express from 'express'
const router = express.Router();
const connection = require('../db');

router.get('/skipasstypes', (req, res) => {
  connection.query('SELECT id, skiPassType FROM skipasstypes', (error, results) => {
    if (error) {
      console.error('Error retrieving skipasstypes from database: ', error);
      res.status(500).json({ error: 'Error retrieving data' });
      return;
    }
    res.json(results);
  });
});

module.exports = router;
