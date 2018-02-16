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
    },
    _comments:[{
        type:Schema.Types.ObjectId,
        ref:'comments'
    }]
});

var autoPopulateCreator = function(next){
    var post = this;
    post.populate({path:'_creator',select:"username -_id"}).populate({path:'_comments'});
    next();
};

PostSchema.pre('find',autoPopulateCreator);

var Post = mongoose.model('post',PostSchema);

// write some encryption for password

module.exports = {Post};