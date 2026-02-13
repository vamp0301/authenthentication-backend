/*to write logic for user registration and login*/
const jwt = require("jsonwebtoken");
const userModel=require('../models/user.model');



async function registerUser(req,res){
    const { username, email, password } = req.body;

const inUserisAlreadyExist = await userModel.findOne({ email });
    if (inUserisAlreadyExist) {
        return res.status(409).json({ message: 'User already exists' });
    }
/* this is done to check if the user is already exist in the database or not and 
if the user is already exist then we will send a response with the message user already exists and
 if the user is not exist then we will create a new user in the database and 
 we will send a response with the message user registered successfully and 
 we will also send the user data in the response*/
    const user = await userModel.create({ username, email, password })


    const token =jwt.sign({
        id: user._id,
    },
    process.env.JWT_SECRET)
    //came from jwt seccet code generate token for user registration and login
    res.cookie('token', token);/*set cookie with name token and value token which we generate for user registration and login and we will use that token in future for authentication and authorization*/


    res.status(201).json({ 
        message: 'User registered successfully',
        user
        /* token but token not send to client because we will use token in future for authentication and authorization
        so it is send in cookies and 
        we will use that token in future for authentication and authorization*/
     });

     };


module.exports={registerUser}; //import logic in auth.routes.js file and use that logic in auth.routes.js file