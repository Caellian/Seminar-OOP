$(document).ready(function() {
  $('layout').each(function() {
    var content = $(this).clone();
    $(this).empty();

    $(this).load($(this).attr('src'), function() {
      content.appendTo('#content');
      $(this).find('main header h1').append($(this).attr('title'));
      $(this).find('#horizontal-nav').load($(this).attr('menu'));
      $(this).find('#vertical-nav').load($(this).attr('sidebar'));
    });
  });
});
