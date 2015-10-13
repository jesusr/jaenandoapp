(function() {
  'use strict';
  var homeCtrl = function($scope, $log) {
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
      onSelectOptionFn: onSelectOptionFn
    });

    init();
  };

  angular.module('home').controller('homeCtrl', homeCtrl);
})();

