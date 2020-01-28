const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mlblog',
    password: 'root',
    port: 5433,
});
client.connect();
client.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    client.end()
});