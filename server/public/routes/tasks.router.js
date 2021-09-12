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

router.post('/', (req, res) => {
    console.log('in /tasks POST');
    const newTask = req.body;
    console.log(`the new task is: ${newTask}`);
    const queryText = `INSERT INTO "tasks" ("task") VALUES($1);`;
    pool.query(queryText, [newTask.task]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
        console.log('error with POST /tasks!');
    });

});

router.get('/', (req, res) => {
    console.log('in /tasks GET');
    const queryText = `SELECT * FROM "tasks" ORDER BY "id" DESC LIMIT 100;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
        console.log('error with /tasks GET', error);
    });
});

router.delete('/:id', (req, res) => {
    console.log('in /tasks DELETE');
    console.log('req.params is:', req.params);
    const taskId = req.params.id;
    const queryText = `DELETE FROM "tasks" WHERE id= $1;`;
    pool.query(queryText, [taskId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error with /tasks DELETE', error);
        res.sendStatus(500);
    });
});


router.put('/:id', (req,res) =>{
    console.log('in /tasks PUT');
    console.log('req.params is', req.params );
    const taskId = req.params.id;
    let queryText = `UPDATE "tasks" SET "complete" = 'true' WHERE id = $1;`
    pool.query(queryText, [taskId]).then((result) =>{
        res.sendStatus(200);
    }).catch((error) =>{
        console.log('error with PUT /tasks', error );
        res.sendStatus(500);
    });
});







module.exports = router;