$(function() {
  function randomNum(num) {
    return parseInt(Math.random() * num);
  }

  $('#animate').click(function() {
    $(this).animate({
      marginLeft: randomNum(300) + 'px'
    }, 1500)
  })

  $.post('http://rap2api.taobao.org/app/mock/19489/api/user/list', function(res) {
    console.log(res);
    if (res.status) {
      var list = res.data.list;
      var htmlStr = list.map(function(item) {
        return '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.phone + '</td></tr>'
      }).join('');

      // var compiled = _.template('<% _.forEach(list, function(item) { %><tr><td><%- item.id %></td><td><%- item.name %></td><td><%- item.phone %></td></tr><% }); %>');

      // var compiled = _.template($('#data-table-template').html());
      
      // var htmlStr = compiled({ list: list });

      $('#data-table tbody').html(htmlStr);
    }
  })
})