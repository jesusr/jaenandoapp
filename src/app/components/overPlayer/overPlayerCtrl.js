(function() {
  'use strict';
  var overPlayerCtrl = function($scope, ngAudio, $rootScope) {
    function init() {}
    angular.extend($scope, {});
    $rootScope.$on('playThis', function(ev, p, title) {
      $scope.lastEvent = ev;
      $scope.title = title;
      window.console.log(p);
      $scope.initSong(p);
    });
    $scope.audio = null;
    $rootScope.$on('stopAudio', function(ev) {
      $scope.lastEvent = ev;
      $scope.stopSong();
    });
    $scope.initSong = function(p) {
      if ($scope.audio !== null) {
        $scope.audio.stop();
      }
      $scope.audio = ngAudio.load(p);
      //$scope.audio.play();
    };
    $scope.playSong = function() {
      $scope.audio.play();
    };
    $scope.pauseSong = function() {
      $scope.audio.pause();
    };
    $scope.muteSong = function() {
      $scope.audio.mute();
    };
    $scope.stopSong = function() {
      $scope.audio.stop();
    };
    $scope.close = function() {
      $scope.audio.stop();
      $scope.audio = null;
    };
    init();
  };
  angular.module('app.map').controller('overPlayerCtrl', overPlayerCtrl);
})();

