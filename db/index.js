const {Client} = require('pg')
const {db} = require('../config');

module.exports = {
    getPosts: (success, fail) => {
        const client = new Client(db);
        client.connect();
        client.query('SELECT * from posts', (err, res) => {
            console.log(res.rows);
            success(res.rows);
            client.end()
        });
    }
};