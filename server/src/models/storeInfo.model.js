const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const StoreInfoSchema = new Schema(
    {
        name_store: {
            type: String,
            require : true,
        },
        address: {
            type: String,
        },
        type_store: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        name_staff: {
            type: String,
        },
        logo: {
            type: String,
        },
        openingDay: {
            type: Date,
        },
        createDay: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);



const StoreInfoModel = mongoose.model('StoreInfo', StoreInfoSchema);

module.exports = StoreInfoModel;