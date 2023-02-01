const connection = require('./connection');



const getposts = async () => {
    const [post] = connection.execute('SELECT * FROM POSTS');
    return post;
};

module.exports = {
    getposts,
};