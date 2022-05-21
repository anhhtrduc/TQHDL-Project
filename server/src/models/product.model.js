const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ProductSchema = new Schema(
    {
        name_product: {
            type: String,
            require : true,
        },
        price_product: {
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