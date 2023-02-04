const express = require('express');
const app = require('../src/app');
const render = require('../src/app');
const router = express.Router();
const  Category  = require('../controllers/Category');
const  Post  = require('../controllers/Post');
const  postMiddleware  = require('../middlewares/postmiddleware');
const connection = require('../models/connection');

router.get('/category',Category.getCategory);

router.get('/post',Post.getPosts);

const createPost = (req, res) => {
    const { id, title, category, author, content } = req.body;
    const sql = "INSERT INTO posts (id,title, category, author, content) VALUES (?, ?, ?, ?, ?)";
    const values = [
        id || null,
        title || null,
        category || null,
        author || null,
        content || null
    ];
    connection.execute(sql, values, (error, results) => {
        if (error) {
            return res.status(500).json({ message: "Failed to create post" });
        }
        return req.redirect("/admin/post");
    });
};
router.post('/post/new',createPost);







module.exports = router;