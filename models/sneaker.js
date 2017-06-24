var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var sneakerSchema = new Schema({
  brand: String,

  model: String, 

  size: Number,

  imageURL: String{

  },

  description: String,

  price: Number
 	
});

var User = mongoose.model("Sneaker", sneakerSchema);

module.exports = Sneaker;