/* we create aur api in auth.routes.js file and
 we will import that api in app.js file and we will use that api in app.js file*/
const express = require('express');
const authController = require('../controllers/auth.controller');//import logic from auth.controller.js file

const router = express.Router();//create api with the help of router


/*router.post('/register', (req, res) => {
    const { username, email, password } = req.body;})*/



    /*as we dont give logic in auth.routes.js file 
    we will give logic in auth.controller.js file and 
    we will import that logic in auth.routes.js file and 
    we will use that logic in auth.routes.js file*/


/* /api/auth/register
 is the endpoint for user registration and
 authController.registerUser is the logic for user registration which we import from auth.controller.js file and
 we use that logic in auth.routes.js file*/

router.post('/register', authController.registerUser);//use logic in auth.routes.js file

module.exports = router;