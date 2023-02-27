const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const userModel = require('../models/user');




const validateUser = (req, res, next) => {
    const requiredFields = ['username', 'email', 'password','confirmPassword'];
    const { password,confirmPassword } = req.body;
    const { body } = req;

    if (password !== confirmPassword) {
        return res.json({message : 'Password dont match'});
    }

  
    for (const field of requiredFields) {
        if (!body[field]) {
            res.status(400).json({ message: `The "${field}" field is required` });
            return;
        }
  
        if (body[field] === '') {
            res.status(400).json({ message: `The "${field}" field cannot be empty` });
            return;
        }


    }
  
    next();
};


  
const validate = (req, res, next) => {
    const requiredFields = ['title', 'category', 'content', 'author'];
    const { body } = req;
  
    for (const field of requiredFields) {
        if (!body[field]) {
            res.status(400).json({ message: `The "${field}" field is required` });
            return;
        }
  
        if (body[field] === '') {
            res.status(400).json({ message: `The "${field}" field cannot be empty` });
            return;
        }
    }
  
    next();
};

const isLoggedIn = async (req, res, next) => {
    if (req.cookies.userSave) {
        try {
            
            const decode = await promisify(jwt.verify)(
                req.cookies.userSave,
                process.env.JWT_SECRET
            );
            const user = await userModel.findUserById(decode.id);
            if (!user) {
                return next();
            }
            req.user = user;
            return next();
        } catch (error) {
            console.log(error);
            return next();
        }
    } else {
        next();
    }
};



module.exports = {
    validate,
    validateUser,
    isLoggedIn
};


