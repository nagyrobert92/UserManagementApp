const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  job: {
    type: String
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("profile", ProfileSchema);
