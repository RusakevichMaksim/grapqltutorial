const { Schema, model, Types } = require("mongoose");

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
});

module.exports = model("Movie", movieSchema);
