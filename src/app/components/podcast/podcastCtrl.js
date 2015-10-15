(function() {
  'use strict';
  var podcastCtrl = function($scope, podcastServ) {
    function init() {}
    podcastServ.load(function(data) {
      $scope.data = data;
    });
    $scope.setHighlight = function(p, n) {
      var elem, elems, l, i, toggle;
      elem = document.querySelector('.' + p.slug);
      elems = document.querySelectorAll('.podcast');
      toggle = elem.className.indexOf('highlight') > 0;
      l = elems.length;
      for (i = 0; i < l; i++) {
        elems[i].className = elems[i].className.split(' ').filter(function(n) {
          return n !== 'highlight';
        }).join(' ');
      }

      if (n !== null && !toggle) {
        elem.className += ' highlight';
      }
    };
    init();
  };
  angular.module('app.podcast').controller('podcastCtrl', podcastCtrl);
})();

