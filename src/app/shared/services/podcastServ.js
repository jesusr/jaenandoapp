(function() {
  'use strict';
  angular.module('app')
    .service('podcastServ', function($http) {
      return {
        load: function(callback) {
          $http.get('http://jaenando.com/wp-json/posts?type=podcast').success(function(data) {
            callback(data);
          });
        }
      };
    });
})();

