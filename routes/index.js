const express = require("express");
const router = express.Router();
const passport = require("passport")
const MeetupController = require("../controllers/meetup_controller")


router.get("/", MeetupController.index);

router.get("/about", MeetupController.about);



router.get("/dashboard", (req, res) => res.send("Dashboard"));



module.exports = router;