// search by id isn't working
// delete isn't auto updating the page
var list = $('.list')
var searchId = $('.searchId')
var lists = $('.lists')


function updateTasks() {
  console.log('update tasks')

  var list = $('.list')

  $.ajax({
    method: 'GET',
    url: '/api/tasks'
  }).done(function(tasks) {
    list.empty();

    tasks.forEach(function(task) {
      console.log(task)
      list.append('<li>' + task.id + ' | ' + task.title + ' | ' + task.status + ' |  ' + task.priority + '</li>')
    })
  })
}

updateTasks()

$('#thing').click(function(){

  $.ajax({
    method: 'GET',
    url: '/api/task/',
    data: {
      id: $(".searchId").val()
    },
    dataType: 'json'
  }).done(function(task) {
    // console.log(task[0].title + " | " + task[0].status);
    lists.append('<li>' + task[0].title + ' | ' + task[0].status + '</li>')
    // $(".searchId").value = ""
    // $('.searchId').value = "";
  });
  // console.log($(".searchId").val());
  // $(".searchId").val().reset();
});

$('#remove').click(function(){
  $.ajax({
    method: 'DELETE',
    url: '/api/task',
    data: {
      id: $(".remove").val()
    }
  }).done(function(task) {
    console.log('done deleting task')



    // console.log(task[0].title + " | " + task[0].status);
  }).fail(function(xhr, text, status) {
    console.error('an error occurred while deleting', text, status)
  });
updateTasks()
  console.log($(".remove").val());
});


// $.ajax({
//   method: 'GET',
//   url: '/api/tasks'
// }).done(function(tasks) {
//   tasks.forEach(function(task) {
//     console.log(task)
//     list.append('<li>' + task.title + ' | ' + task.status + ' | ' + task.priority + '</li>')
//   })
// })


/* CREATE TASK */

var $taskCreateBtn = $('#task-create-btn')
var $taskTitle = $('#task-title')
var $taskPriority = $('#task-priority')
var $taskStatus = $('#task-status')

$taskCreateBtn.click(function() {
  var title = $taskTitle.val()
  var priority = $taskPriority.val()
  var status = $taskStatus.val()

  $.ajax({
    method: 'POST',
    url: '/api/task',
    data: {
      title: title,
      priority: priority,
      status: status
    }
  }).done(function(task) {
    console.log('TASK CREATED!', task)

    updateTasks()
  }).fail(function() {
    console.error('failed to create task :(')
  })
})
