(function() {
  'use strict';
  var podcastCtrl = function($scope, podcastServ) {
    function init() {}
    podcastServ.load(function(data) {
      $scope.data = data;
    });
    init();
  };
  angular.module('app.podcast').controller('podcastCtrl', podcastCtrl);
})();

