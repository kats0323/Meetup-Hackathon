const UserModel = require("../database/models/user_model");


const authCheck = (req,res,next)=>{
    if(!req.user){
        res.redirect("/")
    } else{
        next();
    }
}


const profilePage = (req,res)=>{
    console.log("PROFILE",req.user)
    res.render("profiles/profile");
}


module.exports = {
    profilePage,
    authCheck
}