const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MarketOnline');

const BillSchema = new mongoose.Schema(
    {
        customer: {
            type: String,
        },
        product: [
            {
                id: {
                    type: String,
                },
                quantity: {
                    type: Number,
                },
            },
        ],
        total: {
            type: Number,
        },
        date: {
            type: Date,
        },
    },
    {
        collection: 'Bill',
    }
);

const BillModel = mongoose.model('Bill', BillSchema);

module.exports = BillModel;
