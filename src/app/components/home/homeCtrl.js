(function() {
  'use strict';
  var homeCtrl, config;

  homeCtrl = function() {};

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

