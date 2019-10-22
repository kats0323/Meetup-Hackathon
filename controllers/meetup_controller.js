
const UserModel = require("../database/models/user_model");
const MeetupModel = require("../database/models/meetup_model");


const index = (req, res) => {
    res.render("index/welcome");
}
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
    let { title, description, date,startTime ,endTime,status} = req.body;
    let meetup = await MeetupModel.create({ title, description, date,startTime ,endTime,status})
    .catch(err => res.status(500).send(err));
    res.redirect(`/meetups/show/${meetup._id}`);

}

const show = async (req, res) => {
    let {id }= req.params;
    let meetup = await MeetupModel.findById(id).populate('user')
    .catch(err => res.status(500).send(err));
    res.render("meetups/show", {meetup});
}

const allshow =  async (req, res) => {
MeetupModel.find({status: 'public'})
  .populate('user')
  .sort({date: 'desc'})
  .then(meetups => {
    // res.send('STORIES');
    res.render('meetups/index', {
      meetups: meetups
    });
  });
};



module.exports = {
    index,
    about,
    make,
    create,
    show,
    allshow
   
}
