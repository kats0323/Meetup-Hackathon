const express = require("express");
const router = express.Router();
const passport = require("passport")
const MeetupController = require("../controllers/meetup_controller")


router.get("/", MeetupController.index);




module.exports = router;