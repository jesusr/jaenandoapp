(function() {
  'use strict';
  var mapCtrl = function($scope, mapServ, podcastServ, $rootScope) {
    $scope.paths = null;
    $scope.activateMap = function() {
      podcastServ.load(function(data) {
        var l, i;
        $scope.podcastsById = {};
        l = data.length;
        for (i = 0; i < l; i++) {
          if (typeof $scope.podcastsById[data[i].terms.category[0].slug] === 'undefined') {
            $scope.podcastsById[data[i].terms.category[0].slug] = [];
          }
          $scope.podcastsById[data[i].terms.category[0].slug].push(data[i]);
        }
        mapServ.load(function(d) {
          var i;
          $scope.paths = d;
          for (i = $scope.paths.length - 1; i >= 0; i--) {
            $scope.paths[i].visible = typeof
            $scope.podcastsById[$scope.paths[i].id] !== 'undefined';
          }
        });
      });
    };
    $rootScope.$on('setElementHighBoxEvent', function(ev, id) {
      $scope.lastEvent = ev;
      $scope.highPathId = id;
    });
    $scope.select = function(id) {
      $scope.highPathId = id;
      window.console.log(id);
      $rootScope.$emit('setElementHighEvent', id);
      window.console.log($scope.highPathId);
    };

    function init() {
      $scope.activateMap();
    }
    angular.extend($scope, {});
    init();
  };

  angular.module('app.map').controller('mapCtrl', mapCtrl);
})();

