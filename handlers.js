const database = require('./database');

module.exports = {
    list(req, res) {
        res.json(database.inventory.list())
    },

    add(req, res) {
        // TODO: Validation
        console.log(req.body);
        database.inventory.add(req.body);
        res.sendStatus(201);
    },

    update(req, res) {
        // TODO: Validation
        console.log(req.params);
        if (database.inventory.update(req.params.id, req.body)) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    },

    delete(req, res) {
        if (database.inventory.delete(req.params.id)) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    },
}