const jwt = require("jsonwebtoke");
const userModel = require('../../models/user');
const bcrypt = require('bcryptjs');

const login = async (req,res) => {
    const {email,password} = req.body;
    
};