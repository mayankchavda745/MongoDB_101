const mongoose = require('mongoose')

const restaurantSchema =mongoose.Schema({
    address: {
      building: String,
      coord: [Number],
      street: String,
      zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [{
      date: Date,
      grade: String,
      score: Number,
    }],
    name: String,
    restaurant_id: String,
  });
  

const Restaurant = mongoose.model('Restaurant',restaurantSchema);

module.exports={
    Restaurant
}