const mongoose = require("../db/mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  bio: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  fb_id: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("Profile", ProfileSchema);
