const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const StoreInfoSchema = new Schema(
    {
        id_Store: {
            type: String,
            require : true,
        },
        name_Store: {
            type: String,
        },
        address: {
            type: String,
        },
        type_Store: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        name_Staff: {
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

module.exports = StoreModel;