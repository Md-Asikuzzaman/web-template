$('input[type=checkbox]').change(function() {

    var check = $(this);
    var div = check.parent();
  
    console.log(div);

    if (check.prop('checked')) {
        div.addClass('test');
    }
    else {
        div.removeClass('test');
    }
  
  });
  









