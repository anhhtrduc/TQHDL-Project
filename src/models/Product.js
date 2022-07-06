const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MarketOnline');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: String,
        },
        quantity: {
            type: String,
        },
        store: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    {
        collection: 'Product',
    }
);

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
