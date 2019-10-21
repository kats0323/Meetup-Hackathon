
const UserModel = require("../database/models/user_model");
const MeetupModel = require("../database/models/meetup_model");


const index = (req, res) => {
    res.render("index/welcome");
}

const make = async(req, res) => {
    
    let users = await UserModel.find().select("_id, name")
    .catch(err => res.status(500).send(err));
   
    res.render("meetups/new", {users});
}


const create = async (req, res) => {
    //logic for creating a resource
    let { title, description, accept } = req.body;
    let meetup = await MeetupModel.create({ title, description, accept })
    .catch(err => res.status(500).send(err));
    res.redirect(`/meetups/${meetup._id}`);

}

const show = async (req, res) => {
    let {id }= req.params;
    let meetup = await MeetupModel.findById(id).populate('user')
    .catch(err => res.status(500).send(err));
    res.render("meetups/show", {meetup});
}


module.exports = {
    index,
    make,
    create,
    show
   
}
