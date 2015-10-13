(function() {
  'use strict';
  var ddo = function() {
    return {
      link: function(scope) {
        angular.extend(scope, {});
      },
      templateUrl: '/app/components/snwMap/elements/staticFilter/staticFilter.html'
    };
  };

  angular.module('snwMap.staticFilter')
    .directive('staticFilter', ddo);
})();

