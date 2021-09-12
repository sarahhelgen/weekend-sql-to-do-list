console.log('in js');

$(document).ready(readyNow);


//function to run on page load
function readyNow() {
    console.log('DOM Ready!');
    $('#create-button').on('click', addTask);
    $('#task-table-body').on('click', '.delete-button', deleteTask);
    $('#task-table-body').on('click', '.complete-button', completeTask)
    getTask();
}//end readyNow

//writing a function to collect the task input to send to server with AJAX POST
function addTask() {
    console.log('in addTask'); //checking click handler
    //creating task object from user input
    let taskToSend = {
        task: $('#task-input').val(),
        complete: false,
    }//end taskToSend
    console.log('after input:', taskToSend ); //checking data being sent to server VIA post
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: taskToSend //this is req.body
    }).then(function (response) {
        console.log(`response is: ${response}`);
        $('#task-input').val(''); //clear input
        getTask();
    }).catch(function (error) {
        console.log('error with client POST', error);
        alert('something is wrong with POST!');
    });
}//end addTask


//function to retrieve task data from db
function getTask() {
    console.log('in getTask');
    $('#task-table-body').empty();
    $.ajax({
        type: 'GET',
        url: '/tasks',
    }).then(function (response) {
        console.log('GET /tasks', response)
        //append data to DOM here
        for (task of response) {
            console.log(`The task is: ${task}`);
            $('#task-table-body').append(`
                <tr>
                    <td class="strike-text">${task.task}</td>
                    <td><button data-id="${task.id}" class="complete-button">Complete</button></td> 
                    <td><button data-id="${task.id}" class="delete-button">Delete</button></td>
                </tr>
            `);
            if(task.complete){
                $('.strike-text').css('text-decoration', 'line-through')
            }//end if check
        }//end for loop
    }).catch(function (error) {
        console.log('error with GET /tasks', error);
        alert('something went wrong with your GET!');
    });
}//end getTask


//deletes tasks from db
function deleteTask() {
    console.log('in deleteTask'); //click handler working
    const taskId = $(this).data('id');
    console.log(`$(this) is: ${this}`);
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${taskId}`,
    }).then(function (response) {
        console.log('task deleted!', response);
        getTask();
    }).catch(function (error) {
        alert('something went wrong with DELETE!');
        console.log('something went wrong with DELETE', error);
    });
}//end deleteTask

//updates tasks in db
function completeTask() {
    console.log('in completeTask');
    console.log('what is this?', $(this)); //complete button
    const taskId = $(this).data('id');
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`,
    }).then(function (response) {
        console.log('Task completed!');
        getTask();
    }).catch(function (error) {
        console.log('error with PUT', error);
        alert('You have an error with your PUT!');
    });
}//end completeTask


