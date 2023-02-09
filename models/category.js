
const connection = require('./connection');




const getCategory = async () => {
    const [categories] = await connection.execute('SELECT * FROM categories');
    return categories;
};

const createCategories = async (category) => {
    const { name } = category || null;
    const created_at = new Date(Date.now()).toUTCString(); 
    const updated_at = new Date(Date.now()).toUTCString(); 
    const query = 'INSERT INTO categories(name,created_at,updated_at) VALUES(?,?,?)';
    const [createdcategory] = await connection.execute(query,[name,created_at,updated_at]);
    return createdcategory;
};


const deleteCategory = async (id) => {
    const query = 'DELETE FROM categories WHERE id=?';
    const [removedCategory] = await connection.execute(query,[id]);
    return removedCategory;
};


module.exports = {
    getCategory,
    createCategories,
    deleteCategory,
};