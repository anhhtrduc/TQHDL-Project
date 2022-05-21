const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AbcStaffSchema = new Schema(
    {
        id_Abc: {
            type: String,
            require : true,
        },
        name_Abc: {
            type: String,
        },
        sex_Abc: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const AbcStaffModel = mongoose.model('AbcStaff', AbcStaffSchema);

module.exports = AbcStaffModel;