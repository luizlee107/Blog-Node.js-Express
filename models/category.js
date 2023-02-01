const connection = require('./connection');



const getCategory = async () => {
    const [name] = await connection.execute('SELECT * FROM categories');
    return name;
};


module.exports = {
    getCategory,
};