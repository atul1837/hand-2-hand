const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Message = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("Message", Message, "Messages");
