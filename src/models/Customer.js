const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MarketOnline');

const CustomerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    {
        collection: 'Customer',
    }
);

const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;
