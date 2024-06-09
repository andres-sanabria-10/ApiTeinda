const mongoose = require('mongoose')


const {Schema} = mongoose

const salesSchema = new Schema({

    Date: { 
        type: Date, 
        default: Date.now 
    },
    shoes: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Shoes',
        required: true
        }
    ],
    totalPrice : {
        type: Number,
        default: 0
    }
  })
  
  module.exports = mongoose.model('Sales',salesSchema)