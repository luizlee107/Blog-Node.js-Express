const bcrypt = require("bcryptjs");
const connection = require('../models/connection');



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

module.exports = {
    validate,
    validateUser,
};


