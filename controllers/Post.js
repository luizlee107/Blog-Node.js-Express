const post = require('../models/post');


const publishPost = async (req,res) => {
    const posts = await post.getposts();
    return res.render('admin/post', {posts:posts});
};



module.exports = {
    publishPost,
};