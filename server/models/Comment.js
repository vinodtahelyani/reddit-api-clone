import mongoose from 'mongoose';
var {Schema} = mongoose;
mongoose.Promise = global.Promise;

const commentSchema = new Schema({
    text:{required:true,type:String},
    isDeleted:{type:Boolean,default:false},
    _creator:{type:Schema.Types.ObjectId,ref:'users',required:true},
    _post:{type:Schema.Types.ObjectId,ref:'posts',required:true},
    _comments:[{type:Schema.Types.ObjectId,ref:'comments'}]
});

var Comment = mongoose.model('comments',commentSchema);


module.exports = {Comment};
