const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Profile = require("../models/Profile");

router.get("/", auth, async (req, res) => {
  try {
    const profiles = await Profile.find({ user: req.user.id });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", (req, res) => {
  res.send("Add profile");
});

router.put("/:id", (req, res) => {
  res.send("Update profile");
});

router.delete("/:id", (req, res) => {
  res.send("Delete profile");
});

module.exports = router;
