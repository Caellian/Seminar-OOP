$(document).ready(function() {
  $('include').each(function() {
    $(this).css({'display': 'block'});
    $(this).load($(this).attr('src'));
  });
});
