const {Client} = require('pg');
const {db} = require('../config');

module.exports = {
    getPosts: (success, fail) => {
        const client = new Client(db);
        client.connect();
        client.query('SELECT id, post, description, created, title from posts', (err, res) => {
            success(res.rows);
            client.end()
        });
    }
};