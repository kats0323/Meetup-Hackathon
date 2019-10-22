const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/profile_controller");
const passport = require("passport")



router.get("/profiles",ProfileController.profilePage)

module.exports = router;