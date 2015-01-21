
define(['jquery','../addons/lfa-exercises/js/main'], function($) {
  window.App.book.on('render', function () {
    $('.footnote').popover({html: true});
  });
});
