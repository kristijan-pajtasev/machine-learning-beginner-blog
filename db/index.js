const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mlblog',
    password: 'root',
    port: 5433,
});
client.connect();
client.query('SELECT * from posts', (err, res) => {
    console.log(res.rows);
    client.end()
});