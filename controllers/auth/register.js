const userModel = require('../../models/user');
const bcrypt = require('bcrupt-js');


const register = async (req,res) => {
    const { email, password: Npassword } = req.body;
    if (!email || !Npassword) 
        return res.json({status: "error",error:"Please enter your email and password"});
    else {
        const c = await userModel.getemail() async (err,result) => {
            if (err) throw err;
            if (result[0]) 
                return res.json({status: "error",error:"Please enter your email and password"})
            else {
                const password = bcrypt.hash(Npassword,8);
                const create = await userModel.createUser({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password                  
                } , {error,results} => {
                    if (error) throw error;
                        return res.json({status:"success", success:"User has been registered"})                        

                });

            }
        };
    }

};


module.exports = {
    register;
}