const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const  BillOfSaleSchema= new Schema(
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
        createDayBill: {
            type: Date
        },
    },
    {
        timestamps: true,
    }
);
const BillOfSaleModel = mongoose.model('BillOfSale', BillOfSaleSchema)

module.exports = BillOfSaleModel;
