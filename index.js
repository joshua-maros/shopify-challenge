#!/usr/bin/node

const database = require('./database');
const express = require('express');
const path = require('path');
const routes = require('./routes');

// Some dummy information
database.inventory.add({ 
    name: 'Tomatos', 
    description: 'Red acidic spheres', 
    quantity: 5000 
});
database.inventory.add({ 
    name: 'Flip-Flops', 
    description: 'Not sure if the beach kind or the electrical engineering kind', 
    quantity: 4321
});

const server = express();

routes(server);

server.get('/', (req, res) => {
    res.sendFile(path.resolve('interface.html'))
});

server.listen(8080);

console.log('Server running, access the UI at localhost:8080')
