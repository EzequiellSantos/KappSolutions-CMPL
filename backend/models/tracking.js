const mongoose = require('mongoose')

const TrackingSchema = new mongoose.Schema({
    idCompany: {
        type: String
    },
    vehicle: {
        type: String
    },
    date: {
        type: String
    },
    type: {
        type: String
    },
    productsCode: {
        type: [String]
    },
    productCount: {
        type: Number
    },
    allValue: {
        type: Number
    }
})

module.exports = mongoose.model("Tracking", TrackingSchema)