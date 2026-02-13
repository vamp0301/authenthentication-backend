/*to write logic for user registration and login*/
const jwt = require("jsonwebtoken");
const userModel=require('../models/user.model');



async function registerUser(req,res){
    const { username, email, password } = req.body;
    const user = await userModel.create({ username, email, password });
    const token = jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET)//came from jwt seccet code generate token for user registration and login
    res.status(201).json({ message: 'User registered successfully',
        user,
        token });
}


module.exports={registerUser}; //import logic in auth.routes.js file and use that logic in auth.routes.js file