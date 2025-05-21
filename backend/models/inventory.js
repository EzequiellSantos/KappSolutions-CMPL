const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    idCompany: {
        type: String
    }
})

module.exports = mongoose.model("Inventory", InventorySchema)