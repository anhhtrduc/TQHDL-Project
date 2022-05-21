const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const StoreStaffSchema = new Schema(
    {
        name_staff: {
            type: String,
        },
        name_store: {
            type: String,
        },
        sex_staff: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const StoreStaffModel = mongoose.model('StoreStaff', StoreStaffSchema);

module.exports = StoreStaffModel;