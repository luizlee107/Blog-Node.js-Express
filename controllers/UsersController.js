const userModel = require('../models/user');


const newUser = async (req,res) => {
    return res.render('./admin/user/newuser');
};


const login = async (req,res) => {
    return res.render('./admin/user/login');
};


const createUser = async (req,res) => {
    const createduser = await userModel.createUser({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    return res.redirect('/admin/user/users');
};



module.exports = {
    createUser,
    newUser,
    login,
};