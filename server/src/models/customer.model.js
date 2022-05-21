const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        id_Customer: {
            type: String,
            require: true,
        },
        name_Customer: {
            type: String,
        },
        sex_Customer: {
            typr: String,
        },
    },
    {
        timestamps: true,
    }
);


const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;
 