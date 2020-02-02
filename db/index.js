const {Client} = require('pg');
const {db} = require('../config');

module.exports = {
    getPosts: (success, fail) => {
        const client = new Client(db);
        client.connect();
        client.query('SELECT id, description, created, title from posts', (err, res) => {
            success(res.rows);
            client.end()
        });
    },
    getPostById: (id, success, fail) => {
        const client = new Client(db);
        client.connect();
        client.query('SELECT id, post, description, created, title from posts where id=$1',[id], (err, res) => {
            if(res.rows.length === 1)
                success(res.rows[0]);
            else
                fail();
            client.end()
        });
    }
};