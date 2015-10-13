(function() {
  'use strict';
  var gmapsService = function() {
    var GmapsService;
    GmapsService = function() {
      this.createMapWithBoundingBox = function(elem, boundingBox, opt) {
        var map, center, bounding;
        bounding = new google.maps.LatLngBounds(
          new google.maps.LatLng(boundingBox.sw.lat, boundingBox.sw.lng),
          new google.maps.LatLng(boundingBox.ne.lat, boundingBox.ne.lng)
        );
        center = bounding.getCenter();
        map = new google.maps.Map(elem, {
          center: center,
          zoom: 20
        });
        map.fitBounds(bounding);
        if (opt) {
          map.setOptions(opt);
        }
        return map;
      };
      this.drawRichmarker = function(marker, map) {
        var Rmarker;
        Rmarker = RichMarkerFactory.createRichMarker({
          position: new google.maps.LatLng(marker.geometry.coordinates[1], marker.geometry.coordinates[
            0]),
          draggable: false,
          flat: true,
          map: map,
          content: '<div>' + '<img src="../dist/images/markers/cade_marker.png">' + '</div>'
        });
        return Rmarker;
      };
    };

    return new GmapsService();
  };

  angular.module('snwMap')
    .factory('gmapsService', gmapsService);
})();

