const post = require('../models/post');


const getPosts = async (req,res) => {
    const posts = await post.getposts();
    return res.render('admin/post', {posts:posts});
};


const createPost = async (req,res) => {
    const createdPost = await post.createPost(req.body);
    return req.render('admin/addpost',{createdPost:createdPost});
};



module.exports = {
    getPosts,
    createPost,
};