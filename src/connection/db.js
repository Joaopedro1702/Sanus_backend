const db = require('mysql2/promise');

const pool = db.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    port: process.env.DB_PORT || 3306,
    password: process.env.DB_PSWD,
    database: process.env.DB_NAME
});

module.exports = pool;