const express = require('express');
const app = require('../src/app');
const render = require('../src/app');
const router = express.Router();
const  CategoryController  = require('../controllers/CategoryController');
const UsersController = require('../controllers/UsersController');
const  PostController  = require('../controllers/PostController');
const  postMiddleware  = require('../middlewares/postmiddleware');




//Users routers

router.get('/login',UsersController.loginPage);
router.post('/loginid',UsersController.login);
router.get('/logout',UsersController.logout);
router.get('/user/register',UsersController.newUser);
router.post('/user/createuser',postMiddleware.validateUser,UsersController.register);

//login In routers
/*router.get('/admin/category',postMiddleware.isLoggedIn, (req,res) => {
    if (req.user) {
        res.render('../views/home');
    } else {
        res.render('../views/admin/category');
    }
});*/

//Category routers
router.get('/admin/category',CategoryController.getCategory);
router.post('/admin/newcategory',CategoryController.createCategory);
router.post('/admin/delcategory/:id',CategoryController.deleteCategory);
router.get('/admin/editcategory/:id',CategoryController.editCategory);
router.post('/admin/editedcategory/:id',CategoryController.updateCategory);
router.get('/newpost',CategoryController.getCategory2);




//Posts routers
router.get('/',PostController.getPosts);
router.get('/post/:id',PostController.postShow);
router.post('/new',postMiddleware.validate,PostController.createPost);
router.post('/delpost/:id',PostController.deletePost);
router.get('/editpost/:id',PostController.editPost);
router.post('/edit/:id',postMiddleware.validate,PostController.updatePost);





module.exports = router;