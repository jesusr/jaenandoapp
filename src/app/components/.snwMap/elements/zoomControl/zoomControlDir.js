(function() {
  'use strict';
  var ddo = function() {
    return {
      link: function(scope) {
        angular.extend(scope, {});
      },
      templateUrl: '/app/components/snwMap/zoomControl/zoomControl.html'
    };
  };

  angular.module('snwMap.zoomControl')
    .directive('zoomControl', ddo);
})();

