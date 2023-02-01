const { connect } = require('../src/app');
const connection = require('./connection');



const getposts = async () => {
    const [post] = await connection.execute('SELECT * FROM posts');
    return post;
};


const createPost = async (post) => {
    const { category } = post;
    const { title } = post;
    const { content } = post;
    const { author } = post;
    const dateUTC = new Date(Date.now()).toUTCString(); 
    const { updated_at } = post;

    const query = 'INSERT INTO posts(category,title,content,author,created_at,updated_at) VALUES(?,?,?,?,?)';
    const [createdTask] = await connection.execute(query,[category,title,content,author,dateUTC,updated_at]);
    return {insertId: createdTask.insertId};

};

module.exports = {
    getposts,
    createPost,
};