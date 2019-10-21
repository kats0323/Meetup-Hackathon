const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth_controller");
const passport = require("passport")


router.get('/google', passport.authenticate('google', {scope: ['profile','email']}));


router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  AuthController.login);


router.get('/verify', AuthController.verify);

router.get('/logout', AuthController.logout);

module.exports = router;