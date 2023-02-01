const express = require('express');
const app = require('../src/app');
const render = require('../src/app');
const router = express.Router();
const  Category  = require('../controllers/Category');


router.get('/category',Category.categoryName);









module.exports = router;