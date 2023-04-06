/**
 * @author Amanjot Singh
 **/

const mongoose = require("mongoose");

const review = mongoose.Schema({
  name: String,
  brief: String,
  detail: String,
  imageURL: String,
  youtube: String,
});

const reviewSchema = mongoose.model("Reveiws", review);

module.exports = reviewSchema;
