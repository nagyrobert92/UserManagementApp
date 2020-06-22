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

router.post(
  "/",
  [
    auth,
    [
      check("firstName", "Firstname is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, job, email } = req.body;
    try {
      const newProfile = new Profile({
        firstName,
        lastName,
        job,
        email,
        user: req.user.id
      });
      const profile = await newProfile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.put("/:id", (req, res) => {
  res.send("Update profile");
});

router.delete("/:id", auth, async (req, res) => {
  try {
    let profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ msg: "Profile not found" });
    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    await Profile.findByIdAndRemove(req.params.id);
    res.json({ msg: "Profile removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
