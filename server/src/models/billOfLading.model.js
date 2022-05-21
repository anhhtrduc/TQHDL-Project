const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillOfLadingSchema  = new Schema(
    {
        name_product: {
            type: [String],
            require : true,
        },
        quantity: {
            type: [Number]
        },
        total: {
            type: Number
        },
    },
    {
        timestamps: true,
    }
);


const BillOfLadingModel = mongoose.model('BillOfLading', BillOfLadingSchema);

module.exports = BillOfLadingModel;