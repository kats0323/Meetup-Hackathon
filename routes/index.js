const express = require("express");
const router = express.Router();
const passport = require("passport")


router.get("/", (req, res) => res.send("Welcome"));




module.exports = router;