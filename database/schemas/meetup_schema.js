const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MeetupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Date,
        required: true
    },
    // refereing to another document : normalisation technique
    accept: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = MeetupSchema;