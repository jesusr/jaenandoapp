(function() {
  'use strict';
  var ddo = function() {
    return {
      link: function() {},
      controller: 'mapCtrl',
      templateUrl: '/app/components/podcast/podcast.html',
      scope: {
        p: '='
      }
    };
  };

  angular.module('app.podcast')
    .directive('podcast', ddo);
})();

