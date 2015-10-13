(function() {
  'use strict';
  angular.module('snwMap')
    .controller('snwMapCtrl',
      function($scope, GoogleMapApi, $q) {
        var libs, staticFilterF, categoriesFilter = ['university', 'museum', 'health', 'political',
          'bus_station'
        ];
        staticFilterF = [];
        angular.forEach(categoriesFilter, function(cat) {
          staticFilterF.push(cat.replace(/_/g, '-'));
        });
        angular.extend($scope, {
          libsReady: false,
          mapReady: false,
          options: {
            boundingBox: {
              ne: {
                lat: 39.05189314621162,
                lng: -1.3449207929372733
              },
              sw: {
                lat: 35.84749983238611,
                lng: -7.579662003874773
              }
            }
          },
          staticFilter: staticFilterF
        });

        libs = [GoogleMapApi].concat();
        $q.all(libs).then(function() {
          $scope.libsReady = true;
        });
      });
})();

