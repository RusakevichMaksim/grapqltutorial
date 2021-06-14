const { Schema, model, Types } = require("mongoose");

const directorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = model("Directors", directorSchema);
