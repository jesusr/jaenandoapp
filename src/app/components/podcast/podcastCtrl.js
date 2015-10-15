(function() {
  'use strict';
  var podcastCtrl = function($scope, podcastServ) {
    function init() {}
    var ddata = podcastServ.load(function(data) {
        return data;
      });
    angular.extend($scope, {
      data: ddata
    });
    init();
  };
  angular.module('app.podcast').controller('podcastCtrl', podcastCtrl);
})();

