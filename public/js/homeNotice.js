//this file handles the ajax requests for adding and deleting items from the todo list

$(document).ready(function(){

  $('form').on('submit', function(){

      var id = $('form input');
      var todo = {item: id.val()};

      $.ajax({
        type: 'POST',
        url: '/index',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('.table').on('click', function(){
      var id = $(this).remove(id);
      $.ajax({
        type: 'DELETE',
        url: '/index/' + id,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});