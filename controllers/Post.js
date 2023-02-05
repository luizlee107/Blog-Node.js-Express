const post = require('../models/post');


const getPosts = async (req,res) => {
    const posts = await post.getposts();
    return res.render('./home', {posts:posts});
};


const postShow = async (req,res) => {
    const { id } = req.query;
    let posts;
    if(id){
        posts = await post.getposts({id: id});
    } else {
        posts = await post.getposts();
    }
    return res.render('./admin/post', {posts:posts});
};

const createPost = async (req,res) => {
    const createdPost = await post.createPosts({
        id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        content: req.body.content

    });
    return res.render('./newpost');
};



module.exports = {
    getPosts,
    createPost,
    postShow,
   
};