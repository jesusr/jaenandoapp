(function() {
  'use strict';
  var footerCtrl = function($scope, $log) {
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

  angular.module('app.footer').controller('footerCtrl', footerCtrl);
})();

