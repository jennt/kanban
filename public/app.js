var list = $('.list')
var searchId = $('.searchId')
var lists = $('.lists')
var remove = $('.remove')

$.ajax({
  method: 'GET',
  url: '/api/tasks'
}).done(function(tasks) {
  tasks.forEach(function(task) {
    console.log(task)
    list.append('<li>' + task.title + ' | ' + task.status + ' | ' + task.priority + '</li>')
  })
})

$('#thing').click(function(){

  $.ajax({
      method: 'GET',
      url: '/api/task/?id=' + $(".searchId").val() + '',
      data: {},
      dataType: 'json'
    }).done(function(task) {
      console.log(task[0].title + " | " + task[0].status);
      lists.append('<li>' + task[0].title + ' | ' + task[0].status + '</li>')
});

  console.log($(".searchId").val());
});

$('#delete').click(function(){

$.ajax({
    method: 'DELETE',
    url: '/api/task?id=' + $(".delete").val() + '',
    data: {},
    dataType: 'json'
}).done(function(task) {
  console.log(task[0].title + " | " + task[0].status);

});
  console.log($("delete").val());
});
