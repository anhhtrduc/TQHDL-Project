const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const StoreSchema = new Schema(
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

// 
const StoreInfoSchema = new Schema(
    {
        id_Store: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        name_Store: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        address: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        type: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        phoneNumber: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        name_Staff: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        logo: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        openingDay: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        createDay: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
    },
    {
        timestamps: true,
    }
);

const AbcStaffSchema = new Schema(
    {
        id_Abc: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        name_Abc: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        sex_Abc: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
    },
    {
        timestamps: true,
    }
);

const StoreStaffSchema = new Schema(
    {
        id_Staff: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        name_Staff: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        name_Store: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        sex_Staff: {
            type: String,
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
    },
    {
        timestamps: true,
    }
);

//

const StoreModel = mongoose.model('Store', StoreScheme);

module.exports = StoreModel;
