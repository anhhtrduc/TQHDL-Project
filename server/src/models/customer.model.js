const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        name_customer: {
            type: String,
        },
        sex_customer: {
            typr: String,
        },
    },
    {
        timestamps: true,
    }
);


const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;
 