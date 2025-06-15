const mongoose = require('mongoose');
// vendedores
const ProductSummarySchema = new mongoose.Schema({
    code: String,
    description: String,
    price: Number
    // Adicionar outros campos resumidos do produto conforme necessário
})

const CatalogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    materials: {
        type: [ProductSummarySchema],
    },
    totalValues: {
        type: Number,
        required: true 
    },
    idCompany: {
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('Catalog', CatalogSchema);