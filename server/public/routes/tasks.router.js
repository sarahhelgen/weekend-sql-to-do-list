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

router.post('/', (req,res) =>{
    console.log('in /tasks POST');
    const newTask = req.body;
    console.log(`the new task is: ${newTask}`);
    const queryText = `INSERT INTO "tasks" ("task") VALUES($1);`;
    pool.query(queryText, [newTask.task]).then((result) =>{
        res.sendStatus(200);
    }).catch((error) =>{
        res.sendStatus(500);
        console.log('error with POST /tasks!');
    });

});










module.exports = router;