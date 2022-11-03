const express = require('express');
const router = express.Router();

const Weather = require('../models/weather');

router.get('/', async (req, res) => {
    try {
        const weather = await Weather.all
        res.json({weather})
    } catch(err) {
        res.status(500).json({err})
    }
})



module.exports = router;
