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



const isLoggedIn = async (req,res,next) => {
    if (req.cookies.userSave) {
        try {
            const decoded = await promisify(jwt.verify)(req.cookies.userSave,
                process.env.JWT_SECRET);
            console.log(decoded);
            const usersWithId = await userModel.findUserById(decoded.id);
            console.log(usersWithId);
            if (!usersWithId) {
                return next();
            }
            req.user=usersWithId[0];
            return next();
            
        } catch (err) {
            console.log(err);
            return next();
        }
    } else {
        return next();
    }
};


module.exports = {
    validate,
    validateUser,
    isLoggedIn
};


