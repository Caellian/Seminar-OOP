function handleLayoutTag() {
  $('layout').each(function() {
    var src = $(this).attr('src');

    var content = $(this).clone().html();
    $(this).empty();

    if (typeof src !== 'undefined') {
      $(this).load(src, function() {
        $(this).replaceWith($(this).html());

        var title = $(this).attr('title');
        var vertical = $(this).attr('vertical');
        var horizontal = $(this).attr('horizontal');

        if (typeof title !== 'undefined') {
          $('#page-title').append(title);
        }

        if (typeof horizontal !== 'undefined') {
          $('#horizontal-nav').load(horizontal);
        }

        if (typeof vertical !== 'undefined') {
          $('#vertical-nav').load(vertical);
        }

        $('#content').html(content);
      });
    }
  });
}

function toggleMenu() {
  document.getElementById('layout-parent').classList.toggle("menu");
}

$(document).ready(handleLayoutTag);
