const connection = require('./connection');
const bcrypt = require('bcryptjs');

const getusers = async () => {
    
    const query = 'SELECT * FROM users';
    const [users] = await connection.execute(query);
    return users;
};


const findUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows,fields] = await connection.execute(query,[email]);
    return rows;
};

/*const findUserByUsername = async (name) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    const [rows,fields] = await connection.execute(query,[name]);
    return rows;
};*/

const findUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    const [rows,fields] = await connection.execute(query,[id]);
    return rows[0];
};


const createUser = async (name,email,password) => {
    const hashedPassword = await bcrypt.hash(password,8);
    const created_at = new Date(Date.now()).toUTCString(); 
    const query = 'INSERT INTO users(name,email,password,created_at) VALUES(?,?,?,?)';
    const [result] = await connection.execute(query,[name,email,hashedPassword,created_at]);
    return result;
};


const updateUser = async (user) => {
    const { id } = user;
    const { name } = user; 
    const query = 'UPDATE users SET name=? WHERE id=?';
    const [updatedUser] = await connection.execute(query,[name,id]);
    return updatedUser;

};




module.exports = {
    createUser,
    findUserByEmail,
//    findUserByUsername,
    findUserById,
    updateUser
};