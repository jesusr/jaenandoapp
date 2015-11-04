(function() {
  'use strict';
  angular.module('app')
    .service('mapServ', function($http) {
      return {
        load: function(callback) {
          $http.get('dist/data/data.json').success(function(data) {
            callback(data);
          });
        }
      };
    });
})();

