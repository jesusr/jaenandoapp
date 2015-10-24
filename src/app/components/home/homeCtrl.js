(function() {
  'use strict';
  var homeCtrl, config;

  homeCtrl = function(podcastServ, $scope) {
    podcastServ.load(function(data) {
      var l, i;
      $scope.podcastsById = {};
      l = data.length;
      for (i = 0; i < l; i++) {
        if (typeof $scope.podcastsById[data[i].terms.category[0].slug] === 'undefined') {
          $scope.podcastsById[data[i].terms.category[0].slug] = [];
        }
        $scope.podcastsById[data[i].terms.category[0].slug].push(data[i]);
      }
      $scope.podcasts = data;
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

