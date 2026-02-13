/*we not create api in app.j file we create in auth.routes.js file and 
we will import that api in app.js file and we will use that api in app.js file*/
const express=require('express');
const authRoutes=require('./routes/auth.routes');//import api from auth.routes.js file


const app=express();
app.use(express.json());//to parse json data

app.use('/api/auth',authRoutes);//use api in app.js file 

/*api is the prefix for all the routes in auth.routes.js file and
 authRoutes is the api we import from auth.routes.js file*/

module.exports=app;