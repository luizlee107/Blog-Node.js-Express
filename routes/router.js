const express = require('express');
const app = require('../src/app');
const render = require('../src/app');
const router = express.Router();
const  Category  = require('../controllers/Category');
const  Post  = require('../controllers/Post');
const  postMiddleware  = require('../middlewares/postmiddleware');


router.get('/category',Category.getCategory);

router.get('/post',Post.getPosts);

router.get('/post/add', (req,res) => {
    res.render('admin/addpost');
});

router.post('/post/new',postMiddleware.validate,Post.createPost);







module.exports = router;