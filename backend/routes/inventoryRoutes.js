const express = require('express')
const router = express.Router()
const Inventory = require('../models/inventory')

// @desc    fazer as quatros rotas de CRUD para o inventário com base nas regras

// @desc    Listar todos os inventários de uma empresa
router.get('/', async (req, res) => {

    const { idCompany } = req.query
    if (!idCompany) {
        return res.status(400).json({ error: 'idCompany é obrigatório na query.' })
    }
    try {
        const inventories = await Inventory.find({ idCompany })
        res.json(inventories)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})

// @route   GET /api/inventory
router.post('/', async (req, res) => {
    try {

        const inventory = new Inventory(req.body)
        const savedInventory = await inventory.save()
        res.status(201).json(savedInventory)

    } catch (err) {

        res.status(400).json({ error: err.message })

    }
})


module.exports = router