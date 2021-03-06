function handleParallaxTag() {
  $('parallax').each(function() {
    var src = $(this).attr('src');

    if (typeof src !== 'undefined') {
      $(this).css({'background-image': 'url(' + $(this).attr('src') + ')',
                'background-attachment': 'fixed',
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'display': 'block' /* Allow rendering of custom element */
                });

      var height = $(this).attr('height');
      var width = $(this).attr('width');

      if (typeof height !== 'undefined') {
        $(this).css('height', height);
      }

      if (typeof width !== 'undefined') {
        $(this).css('width', width);
      }
    }
  });
}

$(document).ready(handleParallaxTag);
