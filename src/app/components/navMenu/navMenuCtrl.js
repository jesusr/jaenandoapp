(function() {
  'use strict';
  var navMenuCtrl = function($scope, $log) {
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
    }

    angular.extend($scope, {
      onSelectOptionFn: onSelectOptionFn,
      cadeCenters: []
    });

    init();
  };

  angular.module('navMenu').controller('navMenuCtrl', navMenuCtrl);
})();

