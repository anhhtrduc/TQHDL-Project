const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MarketOnline');

const AccountSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
        },
        role: {
            type: Number,
        },
        fullname: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        cmnd: {
            type: String,
        },
        address: {
            type: String,
        },
        GPKD: {
            type: String,
        },
        CNATTP: {
            type: String,
        },
    },
    {
        collection: 'Account',
    }
);

const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;
