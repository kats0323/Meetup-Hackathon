const mongoose = require("mongoose");
const MeetupSchema = require("./../schemas/meetup_schema");

const MeetupModel = mongoose.model("Meetup", MeetupSchema);

module.exports = MeetupModel;