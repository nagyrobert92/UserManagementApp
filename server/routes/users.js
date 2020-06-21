const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

router.post(
  "/",
  [
    //validation with express-validator
    check("firstName", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter password, should containt 6 or more characters"
    ).isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Passed all validation");
  }
);

module.exports = router;
