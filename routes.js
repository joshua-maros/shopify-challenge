const handlers = require('./handlers');

const register_routes = server => {
    server.get('/items', handlers.list);
    server.post('/items', handlers.add);
    server.patch('/items/:id', handlers.update);
    server.delete('/items/:id', handlers.delete);
};

module.exports = register_routes;
