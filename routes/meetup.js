const express = require("express");
const router = express.Router();
const passport = require("passport")
const MeetupController = require("../controllers/meetup_controller")


// router.get("/", MeetupController.index);

router.get("/about", MeetupController.about);
router.get("/dashboard", (req, res) => res.send("Dashboard"));
router.get("/meetups/new", MeetupController.make);
router.post("/meetups", MeetupController.create);
router.get("/meetups/show/:id", MeetupController.show);
router.get("/", MeetupController.index);
router.get("/meetups/allshow", MeetupController.allshow);
router.get("/users", MeetupController.allshowUser);

module.exports = router;


