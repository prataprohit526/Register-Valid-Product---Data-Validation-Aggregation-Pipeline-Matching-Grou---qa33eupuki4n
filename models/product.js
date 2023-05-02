var mongoose = require("mongoose");

//Complete Schema so that while ading new product it should be valid.
// No two products can have same name in Document .
var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("User", productSchema);
