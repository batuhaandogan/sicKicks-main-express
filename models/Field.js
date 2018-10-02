const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Team = require('./Team');


const fieldSchema = new Schema({
  location: String,
  fieldName: String,
  time: String,
  matchType: String,
  price: Number,
  teamsPlaying: [],
  comments: [Object],
});

const Field = mongoose.model("Field", fieldSchema);

module.exports = Field;

// {type: Schema.Types.ObjectId}