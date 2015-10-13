(function() {
  'use strict';
  var homeCtrl, config;

  homeCtrl = function($scope) {
    $scope.s = 'asdadadasdadsas';
  };

  config = function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/dist/tpls/src/app/components/home/home.html',
        controller: 'homeCtrl'
      })
      .otherwise('/');
  };

  angular.module('app.home')
    .config(config)
    .controller('homeCtrl', homeCtrl);
})();

