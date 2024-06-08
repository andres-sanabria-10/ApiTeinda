const mongoose = require('mongoose')


const {Schema} = mongoose

const shoeSchema = new Schema({

    Brand : {
        type: String,
        required : true
    },
    Model : {
        type: String,
        required : true
    },
    Color : {
        type: String,
        required : true
    },
    Size: {
        type: Number,
        default: 0
      },
    Price: {
    type: Number,
    default: 0
    },
    Image: {
    type: String,
    required : true
    },
    Stock: {
    type: Number,
    default: 0
    }
  })
  
  module.exports = mongoose.model('Shoes',shoeSchema)