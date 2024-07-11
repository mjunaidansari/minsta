const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
