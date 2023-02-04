const post = require('../models/post');


const getPosts = async (req,res) => {
    const posts = await post.getposts();
    return res.render('admin/post', {posts:posts});
};


const createPost = async (req,res) => {
    const createdPost = await new post.createPosts({
        id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        content: req.body.content

    });
    createdPost.save();
    return res.redirect('/admin/post');
};



module.exports = {
    getPosts,
    createPost,
   
};