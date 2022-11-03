const express = require('express');
const router = express.Router();

const Owner = require('../models/owner')

// owners show route
router.get('/:id', (req, res) => {
    try {
        const owner = Owner.findById(parseInt(req.params.id))
        res.json(owner)
    } catch (err) {
        res.status(400).send(`Cannot find owner with id ${req.params.id}`)
    }
})

// owners dogs route
router.get('/:id/dogs', (req, res) => {
    const owner = Owner.findById(parseInt(req.params.id))
    const dogs = owner.dogs
    res.json(dogs)
})

module.exports = router;