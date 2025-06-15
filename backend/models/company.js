const mongoose = require('mongoose')
// empresas

const CompanySchema = new mongoose.Schema({
    name: {
        type: String
    },
    pathImage: {
        type: String
    },
    colors: {
        type: [String]
    }
})

module.exports = mongoose.model("Company", CompanySchema)