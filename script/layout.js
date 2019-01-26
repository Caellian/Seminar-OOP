function handleLayoutTag() {
  $('layout').each(function() {
    var handled = $(this).attr('handled');
    var src = $(this).attr('src');

    var content = $(this).clone().html();
    $(this).empty();

    if (typeof src !== 'undefined' && (typeof handled === 'undefined' || handled === 'true')) {
      $(this).load(src, function() {
        var title = $(this).attr('title');
        var menu = $(this).attr('menu');
        var sidebar = $(this).attr('sidebar');

        if (typeof title !== 'undefined') {
          $(this).find('main header h1').append(title);
        }

        if (typeof menu !== 'undefined') {
          $(this).find('#horizontal-nav').load(menu);
        }

        if (typeof sidebar !== 'undefined') {
          $(this).find('#vertical-nav').load(sidebar);
        }

        $('#content').html(content);
      });
    }

    $(this).attr('handled', 'true');
  });
}

$(document).ready(handleLayoutTag);
