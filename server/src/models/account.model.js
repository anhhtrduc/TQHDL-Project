const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const AccountSchema = new Schema(
    {
        name_Account: {
            type: String,
            require: true,
        },
        password: {
            type: String
        },
        type_Account: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);


const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;