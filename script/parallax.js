$(document).ready(function() {
  $('parallax').each(function() {
    $(this).css({'background-image': 'url(' + $(this).attr('src') + ')',
              'height': $(this).attr('height'),
              'width': $(this).attr('width'),
              'background-attachment': 'fixed',
              'background-position': 'center',
              'background-repeat': 'no-repeat',
              'background-size': 'contain',
              'display': 'block' /* Allow rendering of custom element */
              });
  });
});
