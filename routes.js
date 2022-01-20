const handlers = require('./handlers');

const register_routes = server => {
    server.get('/items', handlers.list);
    server.post('/items', handlers.add);
    server.patch('/items', handlers.update);
    server.delete('/items', handlers.delete);
};

module.exports = register_routes;
