const mongoose = require('mongoose');
const foodSchema = mongoose.Schema({
  "foodName":{
    type: String
  },
  "type":{
    type: String
  },
  "img":{
    type: String
  },
  "price":{
    type: String
  }
});
const food = mongoose.model('food', foodSchema);
module.exports = food;