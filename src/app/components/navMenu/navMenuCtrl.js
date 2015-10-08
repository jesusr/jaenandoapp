(function() {
  'use strict';
  var navMenuCtrl = function($scope, cadeListService, $log) {
    function onSelectOptionFn(selected) {
      if (selected) {
        $log.debug(selected);
      } else {
        $log.debug('cleared');
      }
    }

    /***
     * Initialize all the controller values
     */
    function init() {
      cadeListService.getCitiesList().then(function(data) {
        $scope.cadeCenters = data;
      });
    }

    angular.extend($scope, {
      onSelectOptionFn: onSelectOptionFn,
      cadeCenters: []
    });

    init();
  };

  angular.module('navMenu').controller('navMenuCtrl', navMenuCtrl);
})();

