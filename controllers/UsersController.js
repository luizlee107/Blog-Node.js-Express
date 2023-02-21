const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const { decodeBase64 } = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginPage = async (req,res) => {
    return res.render('./admin/user/login');
};

const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const usersWithEmail= await userModel.findUserByEmail(email);
        console.log(usersWithEmail)
        if (!usersWithEmail) {
            

        }
    }

};




const newUser = async (req,res) => {
    return res.render('./admin/user/newuser');
};


const register = async function register(req,res) {
    const { username,email,password } = req.body;

    try {
        const usersWithEmail = await userModel.findUserByEmail(email);
        if (usersWithEmail.length>0) {
            res.status(400).json({ message: `The email "${email}" is already in use` });
            return;
        };

        const usersWithUsername = await userModel.findUserByUsername(username);
        if (usersWithUsername.length>0) {
            res.status(400).json({ message: `The username "${username}" is already in use` });
            return;
        };

        await userModel.createUser(username,email,password);
        //res.json({ message: 'User registered' });
        res.redirect('/');

    
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }

};

module.exports = {
    register,
    loginPage,
    newUser

};