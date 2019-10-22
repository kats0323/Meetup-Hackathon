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
        type: String,
        required: true 
    },
    endTime: {
        type: String,
        required: true 
    },
    status: {
        type: String,
        default: "public" 
      },
    image:{
          type: String,
          required: true
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
      }
    
});

module.exports = MeetupSchema;