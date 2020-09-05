const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  message: String,
  description: String,
  shares: String,
});

//collection inside Database
module.exports = mongoose.model("tiktokVideos", tiktokSchema);
