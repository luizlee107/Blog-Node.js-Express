const express = require('express');
const app = require('../src/app');
const render = require('../src/app');
const router = express.Router();
const  Category  = require('../controllers/Category');
const  Post  = require('../controllers/Post');


router.get('/category',Category.categoryName);

router.get('/post',Post.publishPost);









module.exports = router;