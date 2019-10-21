const express = require("express");
const router = express.Router();
const passport = require("passport")


router.get("/", (req, res) => res.send("Welcome"));


router.get("/dashboard", (req, res) => res.send("Dashboard"));



module.exports = router;