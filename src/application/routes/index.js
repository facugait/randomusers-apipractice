const express = require('express');
const router = express();

router.use('/user', require('./userRoutes'));

module.exports = router;