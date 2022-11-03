const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const dogRoutes = require('./controllers/dogs')
const ownerRoutes = require('./controllers/owners')
const weatherRoutes = require('./controllers/weather')

server.use('/dogs', dogRoutes)
server.use('/owners', ownerRoutes)
server.use('/weather', weatherRoutes)

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server
