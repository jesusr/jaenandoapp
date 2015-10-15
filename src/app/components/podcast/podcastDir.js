(function() {
  'use strict';
  var ddo = function() {
    return {
      link: function() {},
      templateUrl: '/app/components/podcast/podcast.html',
      scope: {
        p: '=p'
      }
    };
  };

  angular.module('app.podcast')
    .directive('podcast', ddo);
})();

