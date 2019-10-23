
const UserModel = require("../database/models/user_model");
const MeetupModel = require("../database/models/meetup_model");



const about = (req, res) => {
    res.render("index/about");
}

const make = async(req, res) => {
    
    let users = await UserModel.find().select("_id, name")
    .catch(err => res.status(500).send(err));
   
    res.render("meetups/new", {users});
}




const create = async (req, res) => {
    //logic for creating a resource
    let users = await UserModel.find().select(req.firstName)
    // console.log(users)
    let { title, description, date,startTime ,endTime,status} = req.body;
    let image = req.file.filename
    let meetup = await MeetupModel.create({ title, description, date,startTime ,endTime,status,image})
    .catch(err => res.status(500).send(err));
    res.cookie("users",users)
    res.redirect(`/meetups/show/${meetup._id}`)
     
}

const show = async (req, res) => {
    let {id }= req.params;
    let meetup = await MeetupModel.findById(id).populate('user')
    .catch(err => res.status(500).send(err));
    req.cookies.users
    // console.log(req.cookies.users[0].email + "show route")
    let users = req.cookies.users[0]
   
    res.render("meetups/show", {
      meetup,
       users
    });
}


const allshow =  async (req, res) => {
  let meetups = await MeetupModel.find();
  res.render("meetups/index", { meetups });
};

const index =  async (req, res) => {
  let meetups = await MeetupModel.find();
  res.render("index/welcome", { meetups });
};

const allshowUser =  async (req, res) => {
  let users = await UserModel.find();
  console.log(users)
  res.render("meetups/users", { users });
};


const edit = async(req, res) => {
  let id = req.params.id;
  let meetup = await MeetupModel.findById(id)
  .catch(err => res.status(500).send(err));
 
  res.render("meetups/edit", {meetup});
}




const update = async (req, res) => {
  //logic for creating a resource
  let id = req.params.id;
  // console.log(users)
  let { title, description, date,startTime ,endTime} = req.body;
  console.log(req.body)
  // let image = req.file.filename
  // let meetup = await MeetupModel.findById(id).update({ title, description, date,startTime ,endTime,status})
  let meetup = await MeetupModel.findById(id)
  console.log("meetup", meetup)
  console.log("title", title)
  let result = await meetup.updateOne({ title, description, date,startTime ,endTime})
  
  .catch(err => res.status(500).send(err));
  console.log("meetu----p",result)
  res.redirect(`/meetups/show/${meetup._id}`)
   
}







module.exports = {
    index,
    about,
    make,
    create,
    show,
    allshow,
    allshowUser,
    edit,
    update
   }
