const mongoose = require('mongoose');

const Schema = mongoose.Schema;



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



const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;