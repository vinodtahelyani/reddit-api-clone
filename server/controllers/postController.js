var {Post} = require('./../models/Post');
const postController = {};

postController.post = (req,res)=>{
    const {
        title,
        text,
        link,
        userId
    } = req.body;
    const post = new Post({
        title,
        text,
        link,
        _creator:userId
    });
    post.save().then((newPost)=>{
        res.status(200).send(newPost);
    }).catch((e)=>{
        res.status(500).json({
            message:e.message
        })
    });
};

postController.getAll = (req,res)=>{
    Post.find().then((posts)=>{
        if(!posts)return res.status(201).send({message:'no post to show'}); 
        res.status(200).send(posts);     
    }).catch((e)=>{
        res.status(401).send(e.message);
    });
};
postController.getByUserId = (req,res)=>{
    var userId = req.params.userId;
    Post.find({_creator:userId}).then((posts)=>{
        if(!posts)return res.status(200).send({message:'no post to show'});
        res.status(200).send(posts);
    }).catch((e)=>{
        res.status(401).send();
    });
};

export default postController;