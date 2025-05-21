const mongoose = require('mongoose')

const MembersSchema = new mongoose.Schema({
    idCompany: {
        type: String
    },
    name: {
        type: String
    },
    birthDay: {
        type: String
    },
    function: {
        type: String
    }
})

module.exports = mongoose.model("Members", MembersSchema)