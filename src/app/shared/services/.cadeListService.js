(function() {
  'use strict';
  var cadeListService = function($http, $filter) {
    var CadeListService, listGeoJsonPromise, citiesListPromise;
    CadeListService = function() {
      this.getList = function() {
        if (listGeoJsonPromise) {
          return listGeoJsonPromise;
        } else {
          listGeoJsonPromise = $http.get('data/cades_list.geojson').then(function(response) {
            return response.data;
          });
          return listGeoJsonPromise;
        }
      };
      this.getCitiesList = function() {
        if (citiesListPromise) {
          return citiesListPromise;
        } else {
          citiesListPromise = this.getList().then(function(response) {
            if (!response.features) {
              return [];
            }
            var i, cities = [],
              objCities = [],
              features = response.features,
              city;
            for (i = 0; i < features.length; i++) {
              city = features[i].properties.localidad;
              if (cities.indexOf(city) === -1) {
                cities.push(city);
                objCities.push({
                  localidad: city
                });
              }
            }
            objCities = $filter('orderBy')(objCities, 'localidad', false);
            return objCities;
          });
          return citiesListPromise;
        }
      };
    };

    return new CadeListService();
  };

  angular.module('app.services').factory('cadeListService', cadeListService);
})();

