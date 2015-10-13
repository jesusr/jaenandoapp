(function() {
  'use strict';
  var ddo = function() {
    return {
      controller: 'snwMapCtrl',
      scope: {},
      templateUrl: '/app/components/snwMap/snwMap.html'
    };
  };

  angular.module('snwMap')
    .directive('snwMap', ddo);
})();

