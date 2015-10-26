(function() {
  'use strict';
  var ddo = function() {
    return {
      link: function() {},
      controller: 'overPlayerCtrl',
      templateUrl: '/app/components/overPlayer/overPlayer.html'
    };
  };

  angular.module('app.map')
    .directive('overPlayer', ddo);
})();

