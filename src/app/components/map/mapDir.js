(function() {
  'use strict';
  var ddo = function() {
    return {
      link: function() {
      },
      controller: 'mapCtrl',
      templateUrl: '/app/components/map/map.html',
      scope: {}
    };
  };

  angular.module('app.map')
    .directive('map', ddo);
})();

