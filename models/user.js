const connection = require('./connection');


const getusers = async () => {
    
    const query = 'SELECT * FROM users';
    const [users] = await connection.execute(query);
    return users;
};



const createUser = async (user) => {
    const { username } = user || null;
    const { email } = user || null;
    const { password } = user || null;

    const created_at = new Date(Date.now()).toUTCString(); 
    const query = 'INSERT INTO users(username,email,password,created_at) VALUES(?,?,?)';
    const [createduser] = await connection.execute(query,[username,email,password,created_at,updated_at]);
    return createduser;
};



module.exports = {
    createUser
};