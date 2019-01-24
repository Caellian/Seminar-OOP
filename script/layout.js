$(document).ready(function() {
  $('layout').each(function() {
    var content = $(this).clone();
    $(this).empty();

    $(this).load($(this).attr('src'), function() {
      $(this).find('main header h1').append($(this).attr('title'))
      $(this).find('#sidebar-nav').load($(this).attr('menu'))
      content.appendTo('#content');
    });
  });
});
