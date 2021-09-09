const express = require('express');
const router = express.Router();

const pg = require('pg');
const pool = new pg.Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
    console.log('PG connected to postgres!');
});

pool.on('error', (error) => {
    console.log('Unable to connect to postgres!', error);
});










module.exports = router;