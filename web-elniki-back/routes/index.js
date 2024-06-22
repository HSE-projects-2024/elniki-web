const express = require('express');
const router = express.Router();
const apiRoutes = require('./user');

router.use('/api', apiRoutes);

module.exports = router;
