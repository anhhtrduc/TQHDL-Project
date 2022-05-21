const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillOfLadingSchema  = new Schema(
    {
        id_BillOfLading: {
            type: String,
            require : true,
        },
        name_Product: {
            type: [String],
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