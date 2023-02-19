const bcrypt = require("bcryptjs");
const connection = require('../models/connection');


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
  


const validateUser = (req, res, next) => {
    const requiredFields = ['username', 'email', 'password','confirmPassword'];
    const { username ,email, password,confirmPassword } = req.body;
    const { body } = req;

    connection.query('SELECT email from users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
                res.status(400).json({ message: `The email "${email}" is already in use` });
                return;
            
            } else if (password != confirmPassword) {
                res.status(400).json({ message: 'Password don\'t match' });
                return;
                
            
            }
        }
    });

    

  
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


