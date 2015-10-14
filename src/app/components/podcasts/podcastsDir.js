(function() {
  'use strict';
  var ddo = function() {
    return {
      link: function() {
      },
      controller: 'podcastCtrl',
      templateUrl: '/app/components/podcast/podcastList.html',
      scope: {}
    };
  };

  angular.module('app.podcast')
    .directive('podcast', ddo);
})();

