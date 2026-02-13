const express=require('express');
const jwt = require("jsonwebtoken");
const userModel=require('../models/user.model');

const router=express.Router();

/*we will create api for post in post.routes.js file and 
we will import that api in app.js file and we will use that api in app.js file*/


/* /api/post/create is the endpoint for creating a post*/
router.post('/create', async(req, res) => {
    const token = req.cookies.token;/*get token from cookies and we will use that token for authentication and authorization in future*/
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       /* console.log('Decoded token:', decoded);log decoded token in the console for testing and debugging purposes and we will use that decoded token for authentication and authorization in future*/
      
      
       const user = await userModel.findById({
        _id:decoded.id
    });
    console.log('User found:', user);
    /*find user by id from the database and we will use that user for authentication and authorization in future*/
    } 
    catch (err) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    res.send('Post created successfully');});
module.exports=router;