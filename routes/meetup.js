const express = require("express");
const router = express.Router();
const passport = require("passport")
const MeetupController = require("../controllers/meetup_controller")



router.get("/", MeetupController.index);
router.get("/about", MeetupController.about);
router.get("/dashboard", (req, res) => res.send("Dashboard"));
router.get("/meetups/new", MeetupController.make);
router.post("/meetups", MeetupController.create);
router.get("/meetups/show/:id", MeetupController.show);
router.get("/meetups/all", MeetupController.allshow);


module.exports = router;


