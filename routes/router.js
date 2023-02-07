const express = require('express');
const app = require('../src/app');
const render = require('../src/app');
const router = express.Router();
const  Category  = require('../controllers/Category');
const  PostController  = require('../controllers/PostController');
const  postMiddleware  = require('../middlewares/postmiddleware');


router.get('/category',Category.getCategory);

router.get('/',PostController.getPosts);
router.get('/post/:id',PostController.postShow);

router.get('/newpost',PostController.newPost);
router.post('/new',postMiddleware.validate,PostController.createPost);



router.post('/delpost/:id',PostController.deletePost);

router.put('/editpost/:id',postMiddleware.validate,PostController.updatePost);








module.exports = router;