const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Scoreboard = require('../model/scoreboard')

//reset all player data
router.delete('/', async (req, res) => {
    await Character.deleteMany()
    await Scoreboard.deleteMany()
})

module.exports = router