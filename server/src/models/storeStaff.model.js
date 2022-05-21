const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const StoreStaffSchema = new Schema(
    {
        id_Staff: {
            type: String,
            require: true,
        },
        name_Staff: {
            type: String,
        },
        name_Store: {
            type: String,
        },
        sex_Staff: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const StoreStaffModel = mongoose.model('StoreStaff', StoreStaffSchema);

module.exports = StoreStaffModel;