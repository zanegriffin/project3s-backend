const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Item = require('../model/item')
const Event = require('../model/event')
const { json } = require('express')

//enter character into game
router.get('/', async (req, res) => {
    res.json(await Character.find().populate('inventory').populate('events'))
})

router.get('/:username', async (req, res) => {
    res.json( await Character.findOne({username: req.params.username}))
})

//create the character
router.post('/', async (req, res) => {
    res.json(await Character.create(req.body))
})

//add to inventory
router.put('/:username/:item', async (req, res) => {
    let item = await Item.find({name: req.params.item})
    let person = await Character.findOneAndUpdate({username: req.params.username}, {$push: {inventory: item}})
    res.json(person)
    Character.fin
})


//delete characters
router.delete('/', async (req, res) => {
    Character.collection.drop();
})

module.exports = router