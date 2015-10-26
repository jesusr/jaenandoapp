(function() {
  'use strict';
  angular.module('app', [
    'app.filters',
    'app.services',
    'app.navMenu',
    'app.home',
    'app.map',
    'app.podcast',
    'app.overPlayer',
    // vendors
    'ngAnimate',
    'ngAudio',
    'ngRoute',
    'ngSanitize'
  ]);
})();

