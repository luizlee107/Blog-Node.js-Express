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

const findUserByUsername = async (username) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    const [rows,fields] = await connection.execute(query,[username]);
    return rows;
};


const createUser = async (username,email,password) => {
   
    const hashedPassword = await bcrypt.hash(password,8);
    const created_at = new Date(Date.now()).toUTCString(); 
    const query = 'INSERT INTO users(username,email,password,created_at) VALUES(?,?,?,?)';
    const [result] = await connection.execute(query,[username,email,hashedPassword,created_at]);
    return result;
};





module.exports = {
    createUser,
    findUserByEmail,
    findUserByUsername
};