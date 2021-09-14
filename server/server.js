const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('server/public'));

let tasksRouter = require('./public/routes/tasks.router');
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});