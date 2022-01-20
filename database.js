// This could be hooked up to a real database but I found out about this job 5
// hours before the deadline so I'm not going to do that.

const inventory = {
    makeshift_table: [],
    add(data) {
        this.makeshift_table.push(data)
    },
    update(id, data) {
        for (const entry of this.makeshift_table) {
            if (entry.id === id) {
                Object.assign(entry, data)
            }
        }
    },
    delete(id) {
        this.makeshift_table = this.makeshift_table.filter(x => x.id !== id);
    },
    list() {
        return this.makeshift_table
    }
}

module.exports = { inventory };
