const mongoose = require('mongoose');
const { Schema } = mongoose;

const salesSchema = new Schema({
  Date: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  shoes: [
    {
      shoeId: {
        type: Schema.Types.ObjectId,
        ref: 'Shoes',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Sales', salesSchema);
