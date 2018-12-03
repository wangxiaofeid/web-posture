$(function() {
  $.post('http://rap2api.taobao.org/app/mock/19489/api/user/list', function(res) {
    console.log(res);
    if (res.status) {
      var list = res.data.list;
      var htmlStr = list.map(function(item) {
        return '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.phone + '</td><td><a href="javascript:;" class="edit" data-toggle="modal" data-target="#exampleModal" data-item='+ JSON.stringify(item) +'>编辑</a></td></tr>'
      }).join('');

      // var compiled = _.template('<% _.forEach(list, function(item) { %><tr><td><%- item.id %></td><td><%- item.name %></td><td><%- item.phone %></td></tr><% }); %>');

      // var compiled = _.template($('#data-table-template').html());
      
      // var htmlStr = compiled({ list: list });

      $('#data-table tbody').html(htmlStr);
    }
  })

  $('#exampleModal').on('show.bs.modal', function (event) {
    var a = $(event.relatedTarget) // Button that triggered the modal
    var data = a.data('item') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + data.name)
    modal.find('.modal-body input').val(data.name)
    modal.find('.modal-body textarea').val(data.phone)
  })

  $('#exampleModal .btn-primary').click(function () {
    var name = $('#exampleModal .modal-body input').val();
    var phone = $('#exampleModal .modal-body textarea').val();
    console.log('保存信息，name: ' + name + ';phone: ' + phone);
    $('#exampleModal').modal('hide');
  })

  $('#test-form').on('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log($(this));
    console.log('city:', $('#validationDefault03')[0].value);
  })
})