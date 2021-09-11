## Full Stack To Do List

## Description
Duration: 2 Day Sprint

Built a to-do list app with full CRUD. A user can input their tasks into the app, and they will display on the DOM. A user can delete a task, which will both delete it from the DOM as well as the datebase and also click complete, which will change the CSS and update the task as completed in the database.

To see the app on the web, visit: <heroku link>

These are the steps I took to get there:

- [x] build folder structure for app
- [x] create HTML skeleton for user to input to do list
    * input for task
    * submit button 
- [x] build server with boilerplate language
- [x] connect server to database with pg pool
- [x] create ERD for database:
    * id
    * 'task' varchar(300)
    * complete (boolean) - default to false
- [x] create table and insert dummy data in database.sql file
- [x] create router for tasks
    * GET route (server)
    * [x] POST route (server)
    * [x] PUT route (server)
    * [x] DELETE route (server)
- [x] client side AJAX GET
- [x] client side AJAX POST
- [x] client side AJAX PUT
    * need 'complete' button 
- [x] client side AJAX DELETE
    * need 'delete' button
- [x] display the tasks on the DOM and on page load
- [ ] color change for completed task button - in progress
- [x] delete needs to delete from DOM and database
- [x] add some CSS/Bootstrap

## Screen Shots
! [app image] (/images/screenshot.png)


## Prerequisites

* Node.js
* Postgresql

## Installation

1. Create a database named 'weekend-to-do-app'
2. The queries in the 'database.sql' file are all set up for you. This project was built in Postgres, so you will need to have that installed and I'd recommed using Postico to run queries, as that is what I used to test my data.
3. Open your code editor and run an npm install in your terminal
4. Run npm start to start your server
5. Open on localhost:5000

## Built With
* HTML, CSS, Bootstrap, Javascript, JQuery, Node.js, Express, PG, Postgresql

## Acknowledgement

Thanks to my instructors Chris, Liz, Dane, and Kris and everyone at Prime Digital Academy for helping me learn the technical skills to build this!

## Support

If you have feedback or issues with the app, please reach out to me at sarah.helgen@gmail.com


