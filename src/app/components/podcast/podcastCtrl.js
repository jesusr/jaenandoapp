/* global console */
(function() {
  'use strict';
  var podcastCtrl = function($scope, podcastServ) {
    function init() {}
    podcastServ.load(function(data) {
      $scope.data = data;
    });
    $scope.highlighted = null;
    $scope.setElementHigh = function(p) {
      $scope.highlighted = p;
    };
    $scope.setHighlight = function(p) {
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
      if (!toggle) {
        elem.className += ' highlight';
        $scope.setElementHigh(p);
      } else {
        $scope.setElementHigh(null);
      }
      console.log($scope.highlighted);
    };
    init();
  };
  angular.module('app.podcast').controller('podcastCtrl', podcastCtrl);
})();

