const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    code: {
        type: String
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    value: {
        type: Number
    },
    quantity: {
        type: Number
    },
    minQuantity: {
        type: Number
    },
    stateQuantity: {
        type: String
    },
    locationInventory: {
        type: String
    },
    pathImage: {
        type: String
    },
    inventoryId: {
        type: String
    }
})

module.exports = mongoose.model("Product", ProductSchema)