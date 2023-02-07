const postModel = require('../models/post');


const getPosts = async (req,res) => {
    const posts = await postModel.getposts();
    return res.render('./home', {posts:posts});
};


const postShow = async (req,res) => {
    const { id } = req.params;
    const posts = await postModel.filterPosts(id);
    return res.render('./admin/post', {posts:posts});
};

const createPost = async (req,res) => {
    const createdPost = await postModel.createPosts({
        id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        content: req.body.content

    });
    return res.redirect('/');
};

const newPost = async (req,res) => {
    return res.render('./admin/newpost');
};


const deletePost = async (req,res) => {
    const { id } = req.params;
    await postModel.deletePost(id);
    return res.redirect('/');
};



const updatePost = async (req,res) => {
    const { id } = req.params;
    await postModel.updatePost(id,req.body);
    return res.status(204).json();
};


module.exports = {
    getPosts,
    createPost,
    postShow,
    newPost,
    deletePost,
    updatePost
   
};