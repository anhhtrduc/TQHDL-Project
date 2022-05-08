const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const StoreScheme = new Schema(
    {
        name: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        email: {
            type: String,
            trim: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please fill a valid email address',
            ],
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const StoreModel = mongoose.model('Store', StoreScheme);

module.exports = StoreModel;
