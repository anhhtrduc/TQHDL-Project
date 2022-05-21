const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AbcStaffSchema = new Schema(
    {
        name_abc: {
            type: String,
            require : true,
        },
        sex_abc: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const AbcStaffModel = mongoose.model('AbcStaff', AbcStaffSchema);

module.exports = AbcStaffModel;