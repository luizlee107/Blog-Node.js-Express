const connection = require('./connection');



const getCategory = async () => {
    const [categories] = await connection.execute('SELECT * FROM categories');
    return categories;
};




module.exports = {
    getCategory,
};