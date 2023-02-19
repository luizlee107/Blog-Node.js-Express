const connection = require('./connection');


const getusers = async () => {
    
    const query = 'SELECT * FROM users';
    const [users] = await connection.execute(query);
    return users;
};


const getemail = async () => {
    const query = 'SELECT email FROM users WHERE email = ?';
    const [email] = await connection.execute(query,[email]);
    return email;
};


const verifyemail = async () => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [email] = await connection.execute(query,[email]);
    return email;
};


const createUser = async (user) => {
    const { username,email,password,confirmPassword } = user;
    const created_at = new Date(Date.now()).toUTCString(); 
    const query = 'INSERT INTO users(username,email,password,confirmPassword,created_at) VALUES(?,?,?,?,?)';
    const [createduser] = await connection.execute(query,[username,email,password,confirmPassword,created_at]);
    return createduser;
};



module.exports = {
    createUser,
    getemail,
    verifyemail,
    getusers,
};