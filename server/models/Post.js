var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

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
    _creator:{
        ref:'users',
        type:Schema.Types.ObjectId
    }
});

var Post = mongoose.model('post',PostSchema);

//write some encryption for password

// export default Post;
module.exports = {Post};