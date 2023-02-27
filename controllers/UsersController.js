const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');






const loginPage = async (req,res) => {
    return res.render('./admin/user/login');
};


const logout = async (req, res) => {
    //console.log(req.cookies);
    res.cookie('userSave', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true,
    });
    res.status(200).redirect('/');

};


const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({message: 'Please provide an email and password'});
        }
        const usersWithEmail= await userModel.findUserByEmail(email);
        console.log(usersWithEmail);
        if (!usersWithEmail || !await bcrypt.compare(password,usersWithEmail[0].password)) {
            return res.json({message:'Email or password incorrect'});            

        } else {
            const id = usersWithEmail[0].id;
            const token = jwt.sign({id},process.env.JWT_SECRET, {
                expiresIn:process.env.JWT_EXPIRES_IN
            });
            console.log('the token is '+token);
            const cookieOptions = {
                expires: new Date(
                    Date.now()+process.env.JWT_COOKIE_EXPIRES*24*60*60*1000),
                httpOnly:true,
            };
            res.cookie('userSave',token,cookieOptions);
            res.status(200).redirect('/');

        }
    } catch(err){
        console.log(err);
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
        res.status(200).redirect('/');

    
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }

};

module.exports = {
    register,
    loginPage,
    newUser,
    logout,
    login,



};