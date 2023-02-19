const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const { decodeBase64 } = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        confirmPassword: req.body.confirmPassword,
    });
    return res.redirect('/');
};








module.exports = {
    createUser,
    newUser,


};