const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.filterByAgeAndGenderFem);

module.exports = router;