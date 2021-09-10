console.log('in js');

$(document).ready(readyNow);


//function to run on page load
function readyNow() {
    console.log('DOM Ready!');
    $('#create-button').on('click', addTask);
    getTask();
}//end readyNow

//writing a function to collect the task input to send to server with AJAX POST
function addTask() {
    console.log('in addTask'); //checking click handler
    //creating task object from user input
    let taskToSend = {
        task: $('#task-input').val(),
    }//end taskToSend
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

function getTask() {
    console.log('in getTask');
    $('#task-table-body').empty();
    $.ajax({
        type: 'GET',
        url: '/tasks',
    }).then(function (response) {
        console.log('GET /songs', response )
        //append data to DOM here
        for( task of response ){
            console.log(`The task is: ${task}`);
            $('#task-table-body').append(`
                <tr>
                    <td>${task.task}</td?
                </tr>
            `);
        }//end for loop
    }).catch(function (error) {
        console.log('error with GET /tasks', error);
        alert('something went wrong with your GET!');
    });
    
    for( task of response ){

    }//end for loop
}//end getTask