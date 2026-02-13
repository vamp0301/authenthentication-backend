const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:String,
    email:{
        type :String,
        unique: true //to ensure that each email is unique in the database
    },
    password:String
});

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;
