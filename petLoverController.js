//const User = require("../models/petLoverModel");

exports.getAllUsers = (req,res) => {
    res.status(200).json({message:"route is working fine"})
}

// exports.getUsers  = (req,res, next) => {
//     res.status(200).json({success: true, msg: "Show all users"});
// }


/*
exports.getUsers = async(req,res,next) =>{

    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
        message:"Route is working fine"
    })
}


// exports.getUser  = (req,res, next) => {
//     res.status(200).json({success: true, msg: `Show user  ${req.params.id}`});
// }

exports.getUser  = async(req,res, next) => {

    const user = await User.findById(req.params.id);

    if(!user){
        return res.status(500).json({
            success: false,
            message:"User not found"
        })
    }

    res.status(200).json({
        success:true,
        user
    })
}
    


// exports.createUser  = (req,res, next) => {
//     res.status(200).json({success: true, msg: "create new user"});
// }


// CREATE PET LOVER

exports.createUser  = async(req,res, next) => {

    const user = await User.create(req.body);
    res.status(201).json({
        success: true, 
        data: user
    })
}

// UPDATE 

// exports.updateUser  = (req,res, next) => {
//     res.status(200).json({success: true, msg: `update user  ${req.params.id}`});
// }



exports.updateUser = async(req,res,next) => {
    let user = await User.findById(req.params.id);

    if(!user){
        return res.status(500).json({
            success: false,
            message:"User not found"
        })
    }

    user = await User.findByIdandUpdate(req.params.id, req.body,{
        new:true,
        runValidators: true,
        useFindandModify:false
    });

    res.status(200).json({
        success:true,
        user
    })
}

// DELETE

// exports.deleteUser  = (req,res, next) => {
//     res.status(200).json({success: true, msg: `delete user  ${req.params.id}`});
// }

exports.deleteUser = async(req,res,next) =>{

    const user = await User.findById(req.params.id);

    if(!user){
        return res.status(500).json({
            success: false,
            message:"User not found"
        })
    }

    await user.remove();

    res.status(200).json ({
        success: true,
        message:"User Deleted"
    })
}

*/