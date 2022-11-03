const express = require('express');
const router = express.Router();

const Dog = require('../models/dog')

// dogs index route
router.get('/', (req, res) => {
    const dogs = Dog.all
    res.json({dogs})
})

// dogs show route
router.get('/:id', (req, res) => {
    try {
        const dog = Dog.findById(parseInt(req.params.id))
        res.json(dog)
    } catch (err) {
        res.status(400).send(`Cannot find dog with id ${req.params.id}`)
    }
})

// Create dog route
router.post('/', (req, res) => {
    const newDog = Dog.create(req.body.name, req.body.age)
    res.status(201).json(newDog)
})

// dogs update route
router.patch('/:id', (req, res) => {
    const dogToUpdate = Dog.findById(parseInt(req.params.id))
    const updatedDog = dogToUpdate.update({ age: dogToUpdate.age + 1})
    res.json({dog: updatedDog})
})

// delete dog route
router.delete('/:id', (req, res) => {
    const dog = Dog.findById(parseInt(req.params.id))
    dog.destroy()
    res.status(204)
})


module.exports = router;