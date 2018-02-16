var assert = require('assert');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


// var bandSchema = new Schema({
//   name: String
// });

// bandSchema.virtual('members', {
//   ref: 'Person', // The model to use
//   localField: 'name', // Find people where localField
//   foreignField: 'band' // is equal to foreignField
// });

// var Band = mongoose.model('Band', bandSchema);



const PostSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    link:String,
    text:String,
    isDeleted:{
        type:Boolean,
        default:false
    },
    name:{
        type: String,
        required:true,
    }
});

PostSchema.virtual('members',{
    ref: 'users', // The model to use
  localField: 'name', // Find people where localField
  foreignField: 'username' // is equal to foreignFeild
});

var Band = mongoose.model('post',PostSchema);

module.exports = {Band};
