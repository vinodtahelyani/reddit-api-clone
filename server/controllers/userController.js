const {User} = require('./../models/User');
const userController = {};


userController.post = (req,res)=>{
    const {username,password} = req.body;
    const uu = new User({username,password});
    uu.save().then((newUser)=>{
        res.status(200).json({
            success:true,
            data:newUser
        });
    },(e)=>{
        res.status(500).json({
            message:e.message
        });
    });
};


export default userController;