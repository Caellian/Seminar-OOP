function handleIncludeTag() {
  $('include').each(function() {
    var src = $(this).attr('src');

    if (typeof src !== 'undefined') {
      $(this).css({'display': 'block'});
      $(this).load($(this).attr('src'));
      $(this).replaceWith($(this).html());
    }
  });
}

$(document).ready(handleIncludeTag);
