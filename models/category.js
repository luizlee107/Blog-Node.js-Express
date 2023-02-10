
const connection = require('./connection');




const getCategory = async () => {
    const [categories] = await connection.execute('SELECT * FROM categories');
    return categories;
};


const filterCategory = async (id) => {
    const query = 'SELECT * FROM categories WHERE id=?';
    const [category] = await connection.execute(query,[id]);
    return category;
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


const updateCategory = async (category) => {
    const { id } = category || null;
    const { name } = category || null;
    const updated_at = new Date(Date.now()).toUTCString(); 
    const query = 'UPDATE categories SET name=?, updated_at=? WHERE id=?';
    const [updatedPost] = await connection.execute(query,[name,updated_at,id]);
    return updatedPost;

};



module.exports = {
    getCategory,
    createCategories,
    deleteCategory,
    updateCategory,
    filterCategory,
};