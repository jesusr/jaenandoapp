(function() {
  'use strict';
  angular.module('snwMap', ['snwMap.gmap', 'snwMap.zoomControl', 'snwMap.staticFilter'])
    .config(function(GoogleMapApiProvider) {
      GoogleMapApiProvider.configure({});
    });
})();

