#!/usr/bin/node

const database = require('./database');

database.inventory.add({ id: 'asdf', field: 456 });
database.inventory.update('asdf', { field: 123 });
console.log(database.inventory.list());