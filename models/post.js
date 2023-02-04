
const connection = require('./connection');



const getposts = async () => {
    const [post] = await connection.execute('SELECT * FROM posts');
    return post;
};


const createPosts = async (post) => {
    const { id } = post;
    const { category } = post;
    const { title } = post;
    const { content } = post;
    const { author } = post;
    const dateUTC = new Date(Date.now()).toUTCString(); 
    const dateUTC2 = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO posts(id,category,title,content,author,created_at,updated_at) VALUES(?,?,?,?,?,?,?)';
    const [createdTask] = await connection.execute(query,[id,category,title,content,author,dateUTC,dateUTC2]);
    return {insertId:createdTask.insertId};

};

module.exports = {
    getposts,
    createPosts,
};