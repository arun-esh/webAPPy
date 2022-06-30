const mongoose = require(`mongoose`);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Product must have a name.'],
    unique: true,
  },
  tags: {
    type: Array,
    default: [],
  },
  quantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A Product must have a price.'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
