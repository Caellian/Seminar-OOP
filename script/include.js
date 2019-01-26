function handleIncludeTag() {
  $('include').each(function() {
    var handled = $(this).attr('handled');
    var src = $(this).attr('src');

    if (typeof src !== 'undefined' && (typeof handled === 'undefined' || handled === 'true')) {
      $(this).css({'display': 'block'});
      $(this).load($(this).attr('src'));
    }

    $(this).attr('handled', 'true');
  });
}

$(document).ready(handleIncludeTag);
