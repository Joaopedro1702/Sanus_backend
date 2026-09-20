const db = require('mysql2/promise');

console.log("DB:", process.env.DB_HOST, process.env.DB_PORT, process.env.DB_NAME);

const pool = db.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PSWD,
    database: process.env.DB_NAME
});


module.exports = pool;