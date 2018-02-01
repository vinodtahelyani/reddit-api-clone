import mongoose from 'mongoose';
mongoose.set('debug',true);
var {Schema} = mongoose;
mongoose.Promise = global.Promise;

const CommentSchema = new Schema({
    
});

var Comment = mongoose.model('Comments',CommentSchema);


module.exports = {Comment};
