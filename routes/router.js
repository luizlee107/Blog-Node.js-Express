const express = require('express');
const app = require('../src/app');
const render = require('../src/app');
const router = express.Router();
const  CategoryController  = require('../controllers/CategoryController');
const  PostController  = require('../controllers/PostController');
const  postMiddleware  = require('../middlewares/postmiddleware');
const UsersController = require('../controllers/UsersController');



//Users routers
router.get('/user/newuser',UsersController.newUser);
router.post('/user/createuser',UsersController.createUser);
router.get('/user/login',UsersController.login);


//Posts routers
router.get('/',PostController.getPosts);
router.get('/post/:id',PostController.postShow);

router.get('/newpost',CategoryController.getCategory2);

router.post('/new',postMiddleware.validate,PostController.createPost);
router.post('/delpost/:id',PostController.deletePost);

router.get('/editpost/:id',PostController.editPost);

router.post('/edit/:id',postMiddleware.validate,PostController.updatePost);

//Category routers
router.get('/admin/category',CategoryController.getCategory);
router.post('/admin/newcategory',CategoryController.createCategory);
router.post('/admin/delcategory/:id',CategoryController.deleteCategory);
router.get('/admin/editcategory/:id',CategoryController.editCategory);
router.post('/admin/editedcategory/:id',CategoryController.updateCategory);





module.exports = router;




