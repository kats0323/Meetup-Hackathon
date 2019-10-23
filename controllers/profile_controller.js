const UserModel = require("../database/models/user_model");




const profilePage = (req,res)=>{
    console.log("PROFILE",req.user)
    res.render("profiles/profile");
}


module.exports = {
    profilePage
}