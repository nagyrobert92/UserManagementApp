const express = require("express");
const router = express.Router();

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
