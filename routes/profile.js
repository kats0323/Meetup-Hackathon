const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/profile_controller");
const passport = require("passport")
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');



router.get("/profiles",ensureAuthenticated,ProfileController.profilePage)

module.exports = router;