const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const AccountSchema = new Schema(
    {
        name_account: {
            type: String,
            require: true,
        },
        password: {
            type: String
        },
        type_account: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);


const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;