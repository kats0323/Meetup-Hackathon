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
<<<<<<< HEAD
router.get("/meetups/all", MeetupController.allshow);
=======
>>>>>>> 3cc088016eab35b54e5262ceb9f40da066763450


module.exports = router;


