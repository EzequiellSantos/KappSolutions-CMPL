const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({
    description: {
        type: String
    },
    licensePlate: {
        type: String
    },
    driver: {
        type: String
    },
    integrals: {
        type: [String]
    },
    idCompany: {
        type: String
    }
})

module.exports = mongoose.model("Vehicle", VehicleSchema)