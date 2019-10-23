const UserModel = require("../database/models/user_model");




const profilePage = (req,res)=>{
    console.log(req)
    res.render("profiles/profile", { user:req.user} );
}


module.exports = {
    profilePage
}