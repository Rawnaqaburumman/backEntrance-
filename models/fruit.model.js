'use strict '
const mongoose = require("mongoose");
class Fruit {
    constructor(name, image,price) {
      this.name = name;
      this.image = image;
      this.price=price
    }
  }



  
  const fruits = new mongoose.Schema({
   
    name: {
      type: String,
      
    },
   image: {
      type: String,

    },
    price: {
        type: String,
   
    }
  });
  
  // This creates our model from the above schema, using mongoose's model method
  const MyFruiteModle = mongoose.model("MyFruite", fruits );
  
  // Export the Article model
  module.exports = {MyFruiteModle ,Fruit};