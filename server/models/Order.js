const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  address: { type: String, required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Shipped, Delivered
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
