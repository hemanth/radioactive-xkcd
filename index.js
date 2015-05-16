var XKCD_API = 'http://xkcd-imgs.herokuapp.com/',
  setComic = function() {
    comic = radioactive.data(XKCD_API);
    radioactive.react(function() {
      var data = comic();
      $('#loader').show();
      $('#comic-link').attr('href', data.url);
      $('#comic-src').on('load', function() {
        $('#comic-title').html(data.title);
        $('#loader').fadeOut();
      }).attr('src', data.url);
    })
  };

$(function() {
  setComic();
  $('#random').on('click', setComic);
});
