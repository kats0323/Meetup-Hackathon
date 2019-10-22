const UserModel = require("../database/models/user_model");


const authCheck = (req,res,next)=>{
    if(!req.user){
        res.redirect("/")
    } else{
        next();
    }
}


const profilePage = (req,res)=>{
    console.log(req)
    res.render("profiles/profile", { user:req.user} );
}


module.exports = {
    profilePage,
    authCheck
}