console.log( 'in js');

$(document).ready(readyNow);


//function to run on page load
function readyNow(){
    console.log('DOM Ready!');
    $('#create-button').on('click', addTask );
}//end readyNow

//writing a function to collect the task input to send to server with AJAX POST
function addTask(){
    console.log('in addTask'); //checking click handler
    //creating task object from user input
    let taskToSend = {
        task: $('#task-input').val(),
    }//end taskToSend
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: taskToSend
    }).then(function(response){
        $('#task-input').val(''); //clear input
    }).catch(function(error){
        console.log('error with client POST', error );
        alert('something is wrong with POST!');
    });
}//end addTask