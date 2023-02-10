const postModel = require('../models/post');
const categoryModel = require('../models/category');


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
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        content: req.body.content,
        
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


const editPost = async (req,res) => {
    const  id  = req.params.id;
    const posts = await postModel.filterPosts(id);
    const categories = await categoryModel.getCategory();
    return res.render('./admin/editpost',{posts:posts,categories:categories});
};

const updatePost = async (req,res) => {
    const { id } = req.params.id;
    await postModel.updatePost({
        id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        content: req.body.content
    });
    return res.redirect('/');
};



module.exports = {
    getPosts,
    createPost,
    postShow,
    newPost,
    deletePost,
    editPost,
    updatePost,
   
};