const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const  BillOfSaleSchema= new Schema(
    {
        id_BillOfSale: {
            type: String,
            require : true,
        },
        id_Customer: {
            type: String,
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
