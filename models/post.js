
const connection = require('./connection');



const getposts = async () => {
    const [post] = await connection.execute('SELECT * FROM posts');
    return post;
};


const filterPosts = async (id) => {
    const query = 'SELECT * FROM posts WHERE id=?';
    const [post] = await connection.execute(query,[id]);
    return post;
};


const createPosts = async (post) => {
    const { category } = post || null;
    const { title } = post || null;
    const { content } = post || null;
    const { author } = post || null;
    const dateUTC = new Date(Date.now()).toUTCString(); 
    const dateUTC2 = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO posts(category,title,content,author,created_at,updated_at) VALUES(?,?,?,?,?,?)';
    const [createdTask] = await connection.execute(query,[category,title,content,author,dateUTC,dateUTC2]);
    return {insertId:createdTask.insertId};

};

const deletePost = async (id) => {
    const query = 'DELETE FROM posts WHERE id=?';
    const [removedPost] = await connection.execute(query,[id]);
    return removedPost;
};


const updatePost = async (post) => {
    const { id } = post || null;
    const { category } = post || null;
    const { title } = post || null;
    const { content } = post || null;
    const { author } = post || null;


    const query = 'UPDATE posts SET title=?, category=?, author=?, content=? WHERE id=?';
    const [updatedPost] = await connection.execute(query,[title,category,author,content,id]);
    return updatedPost;

};

module.exports = {
    getposts,
    filterPosts,
    createPosts,
    deletePost,
    updatePost
};