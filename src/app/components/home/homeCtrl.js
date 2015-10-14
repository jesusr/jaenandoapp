(function() {
  'use strict';
  var homeCtrl, config;

  homeCtrl = function($scope, podcastServ) {
    podcastServ.load(function(data) {
      $scope.data = data;
    });
  };

  config = function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/components/home/home.html',
        controller: homeCtrl
      })
      .otherwise('/');
  };

  angular.module('app.home')
    .config(config)
    .controller('homeCtrl', homeCtrl);
})();

