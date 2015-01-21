define(['jquery'], function($) {
  window.App.book.on('render', function () {
    $('.footnote').popover({html: true});
  });
});
WebFontConfig = {
google: { families: [ 'Open+Sans+Condensed:300,700,300italic:latin,latin-ext' ] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();
  //temporarily include font to see what it looks like
