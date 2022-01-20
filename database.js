const { v4: uuidv4 } = require('uuid');

// This could be hooked up to a real database but I found out about this job 2
// hours before the deadline so I'm not going to do that.

const inventory = {
    makeshift_table: [],
    add(data) {
        data.id = uuidv4();
        this.makeshift_table.push(data);
    },
    update(id, data) {
        for (const entry of this.makeshift_table) {
            if (entry.id === id) {
                Object.assign(entry, data);
                return true;
            }
        }
        return false;
    },
    delete(id) {
        const old_length = this.makeshift_table.length;
        this.makeshift_table = this.makeshift_table.filter(x => x.id !== id);
        return this.makeshift_table.length !== old_length;
    },
    list() {
        return this.makeshift_table;
    }
}

module.exports = { inventory };
