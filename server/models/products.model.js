const mongoose = require("mongoose");

// Const the model:
// Const te Schema
const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "te name of the product is required"],
        minLength: [3, "the name of the product should ave at least 3 characters!"]
    },
    price: {
        type: Number,
        required: [true, "every item should have a price, please insert one"],
        min: [1, "it should at least be 1 USD"],
    },
    description: {
        type: String,

    }
}, {timestamps: true});

// "Packing " the Schema
const Product = mongoose.model("Product" , ProductSchema);

module.exports = Product;