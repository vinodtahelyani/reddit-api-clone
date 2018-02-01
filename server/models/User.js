import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

var User = mongoose.model('users',{
    username:{
        type:String,
        required:true,
        minlength:[5,'User name must be atleast of 5 character'],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[8,'User name must be atleast of 5 character'],
    },
    age:Number
});

//write some encryption for password

module.exports = {User};
