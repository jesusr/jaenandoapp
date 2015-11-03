(function() {
  'use strict';
  var podcastCtrl = function($scope, $rootScope, $timeout) {
    function init() {}
    $scope.podcasts = $scope.$parent.podcasts;
    $scope.podcastsById = $scope.$parent.podcastsById;
    $scope.highlighted = null;
    $rootScope.$on('setElementHighEvent', function(ev, id) {
      var p, l, i;
      $scope.lastEvent = ev;
      l = $scope.podcasts.length;
      p = null;
      for (i = 0; i < l; i++) {
        if ($scope.podcasts[i].terms.category[0].slug === id) {
          p = $scope.podcasts[i];
          $scope.setHighlight(p);
          return;
        }
      }
    });
    $scope.setElementHigh = function(p) {
      if (p !== null) {
        $rootScope.$emit('setElementHighBoxEvent', p.terms.category[0].slug);
      } else {
        $rootScope.$emit('setElementHighBoxEvent', p);
      }
      $scope.highlighted = p;
      $scope.isHigh = p;
    };
    $scope.setHighlight = function(p) {
      var elem, elems, l, i, toggle, mapContainer;
      mapContainer = document.querySelector('.mapContainer');
      if (mapContainer.className.indexOf('shareView') < 0) {
        mapContainer.className += ' shareView';
      }
      elem = document.querySelector('.' + p.terms.category[0].slug);
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
        $scope.mapClassChange();
      }
    };
    $scope.play = function(p, title) {
      $rootScope.$emit('playThis', p, title);
    };
    $scope.detail = function(p) {
      $rootScope.$emit('detailThis', p);
    };
    $scope.closeHighlight = function() {
      $scope.highlighted = null;
      $scope.isHigh = null;
      $scope.mapClassChange();
      $rootScope.$emit('setElementHighBoxEvent', null);
    };
    $scope.mapClassChange = function() {
      var mapContainer, arr, i;
      mapContainer = document.querySelector('.mapContainer');
      if (mapContainer.className.indexOf('shareView') >= 0) {
        arr = mapContainer.className.split(' ');
        for (i = arr.length - 1; i >= 0; i--) {
          if (arr[i] === 'shareView') {
            arr[i] = '';
          }
        }
        $timeout(function() {
          mapContainer.className = arr.join(' ');
        }, 0);
      }
    };
    init();
  };
  angular.module('app.podcast').controller('podcastCtrl', podcastCtrl);
})();

