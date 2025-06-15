const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// Listar todos os inventários de uma companhia
router.get('/:idCompany', async (req, res) => {
  try {

    const inventories = await Inventory.find({
        idCompany: req.params.idCompany 
    });

    res.json(inventories);

  } catch (err) {

    res.status(500).json({ message: err.message });
  }

});

// Criar um novo inventário para uma companhia
router.post('/:idCompany', async (req, res) => {

  const inventory = new Inventory({
    name: req.body.name,
    location: req.body.location,
    idCompany: req.params.idCompany
  });
  
  try {
    const newInventory = await inventory.save();
    res.status(201).json(newInventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});

// Atualizar um inventário específico de uma companhia
router.put('/:idCompany/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findOne({ _id: req.params.id, idCompany: req.params.idCompany });
    if (!inventory) return res.status(404).json({ message: 'Inventário não encontrado' });

    inventory.name = req.body.name ?? inventory.name;
    inventory.location = req.body.location ?? inventory.location;

    const updatedInventory = await inventory.save();
    res.json(updatedInventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deletar um inventário específico de uma companhia
router.delete('/:idCompany/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findOneAndDelete({ _id: req.params.id, idCompany: req.params.idCompany });
    if (!inventory) return res.status(404).json({ message: 'Inventário não encontrado' });
    res.json({ message: 'Inventário removido' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;