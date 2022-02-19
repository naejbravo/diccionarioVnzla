const mongoose = require("mongoose");

const { Schema, Types } = mongoose;
const wordSchema = new Schema(
  {
    word: String,
    venezuelanWord: String,
  },
  {
    collection: "words",
  }
);

module.exports = mongoose.model("Word", wordSchema, "words");
