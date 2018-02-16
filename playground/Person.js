var assert = require('assert');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;



// var personSchema = new Schema({
//   name: String,
//   age: Number,
//   instrument: String,
//   band: String
// });


// var Person = mongoose.model('Person', personSchema);
// module.exports = {Person};





var Person = mongoose.model('users',{
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


module.exports = {Person};
