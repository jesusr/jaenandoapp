(function() {
  'use strict';
  var ddo = function(gmapsService, cadeListService) {
    return {
      link: function(scope, elem) {
        var mapOpt = {
          panControl: false,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          overviewMapControl: false
        };

        angular.extend(scope, {
          map: gmapsService.createMapWithBoundingBox(elem[0], scope.options.boundingBox, mapOpt),
          mapReady: true
        });
        angular.extend(scope, {
          cadeData: []
        });
        cadeListService.getList().then(function(r) {
          var marker;
          scope.cadeData = r.features;
          angular.forEach(scope.cadeData, function(c) {
            marker = gmapsService.drawRichmarker(c, scope.map);
            marker.properties = c.properties;
          });
        });
      },
      replace: true,
      template: '<div class="snw-map"></div>'
    };
  };

  angular.module('snwMap.gmap')
    .directive('gmap', ddo);
})();

