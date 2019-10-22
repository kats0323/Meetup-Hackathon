
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
    let { title, description, date,startTime ,endTime,status, image} = req.body;
    let meetup = await MeetupModel.create({ title, description, date,startTime ,endTime,status, image})
    .catch(err => res.status(500).send(err));
    console.log(image)

    res.redirect(`/meetups/show/${meetup._id}`);    
}

const show = async (req, res) => {
    let {id }= req.params;
    let meetup = await MeetupModel.findById(id).populate('user')
    .catch(err => res.status(500).send(err));
    res.render("meetups/show", {meetup});
}

const allshow =  async (req, res) => {
  let meetups = await MeetupModel.find();
  res.render("meetups/index", { meetups });
};

const index =  async (req, res) => {
  let meetups = await MeetupModel.find();
  res.render("index/welcome", { meetups });
};


module.exports = {
    index,
    about,
    make,
    create,
    show,
    allshow
   
}
