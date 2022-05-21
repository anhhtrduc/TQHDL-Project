const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 
const StoreInfoSchema = new Schema(
    {
        id_Store: {
            type: String,
            require : true,
        },
        name_Store: {
            type: String,
        },
        address: {
            type: String,
        },
        type_Store: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        name_Staff: {
            type: String,
        },
        logo: {
            type: String,
        },
        openingDay: {
            type: Date,
        },
        createDay: {
            type: Date,
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


const ProductSchema = new Schema(
    {
        id_Product: {
            type: String,
            require : true,
        },
        name_Product: {
            type: String,
        },
        price_Product: {
            type: String,
        },
        inventory: {
            type: Boolean,
        },
        image: {
            type: String 
        },

    },
    {
        timestamps: true,
    }
);

const  BillOfSaleSchema= new Schema(
    {
        id_BillOfSale: {
            type: String,
            require : true,
        },
        id_Customer: {
            type: String,
        },
        name_Product: {
            type: [String],
        },
        quantity: {
            type: [Number]
        },
        total: {
            type: Number
        },
        createDayBill: {
            type: Date
        },
    },
    {
        timestamps: true,
    }
);

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

const BillOfLadingSchema  = new Schema(
    {
        id_BillOfLading: {
            type: String,
            require : true,
        },
        name_Product: {
            type: [String],
        },
        quantity: {
            type: [Number]
        },
        total: {
            type: Number
        },
    },
    {
        timestamps: true,
    }
);

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
)

//
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const StoreModel = mongoose.model('Store', StoreScheme);

module.exports = StoreModel;
 
