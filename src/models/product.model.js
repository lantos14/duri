const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {
      type: String, 
      required: true,
    },
    price: {
      type: String, 
      required: true},
    store: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    }
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);