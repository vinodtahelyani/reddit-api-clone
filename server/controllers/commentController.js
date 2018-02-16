const {Comment} = require('./../models/Comment');
const {Post} = require('./../models/Post');
var commentController = {};

commentController.post = (req,res)=>{
    const {
        text,
        isDeleted,
        _creator,
        _post,
        _comments
    } = req.body;
    var comment = new Comment({
        text,
        isDeleted,
        _creator,
        _post,
        _comments
    }) ;
    comment.save().then((comment)=>{
        res.status(200).send(comment);
        Post.findByIdAndUpdate({_id:_post},{$push:{_comments:comment._id}}).then((post)=>{
            //res.status(200).send(comment);
        })
    }).catch((e)=>{
        res.status(500).send(e.message);
    });
};

export default commentController;