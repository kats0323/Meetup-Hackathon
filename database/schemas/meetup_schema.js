const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MeetupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true 
    },
    startTime: {
        type: Date,
        required: true 
    },
    endTime: {
        type: Date,
        required: true 
    },
    status: {
        type: String,
        default: "public" 
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }

    
    
});

module.exports = MeetupSchema;