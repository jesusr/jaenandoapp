(function() {
  'use strict';
  var homeCtrl, config;

  homeCtrl = function(podcastServ, $scope, $rootScope) {
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
    $scope.podcastDetailed = null;
    $scope.goToTop = function() {
      var body = jQuery('html, body');
      body.stop().animate({
        scrollTop: 0
      }, '500', 'swing', function() {});
    };
    $scope.playThis = function(p, title) {
      $rootScope.$emit('playThis', p, title);
    };
    $scope.closeDetail = function() {
      $scope.podcastDetailed = null;
    };
    $scope.galleryImageInit = function(d) {
      var str = d;
      window.console.log(str);
    };
    $rootScope.$on('detailThis', function(ev, p) {
      var galleryString, txtVar = 'texto_completo';
      $scope.lastEvent = ev;
      galleryString = p.acf[txtVar].substring(p.acf[txtVar].indexOf('<div'), p.acf[txtVar]
        .indexOf('</div') + 6);
      p.acf[txtVar] = p.acf[txtVar].replace(galleryString, '');
      $scope.galleryImageInit(galleryString);
      $scope.podcastDetailed = p;
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

