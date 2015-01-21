define(['jquery'], function($) {
  window.App.book.on('render', function () {
    $('.footnote').popover({html: true});
  });
});
