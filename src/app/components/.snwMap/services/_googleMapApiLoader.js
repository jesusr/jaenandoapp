(function() {
  'use strict';
  angular.module('snwMap')
    .factory('uiGmapMapScriptLoader', function($q, $window, $document) {
      var getScriptUrl, includeScript, isGoogleMapsLoaded, scriptId, scriptCount;
      scriptId = void 0;
      scriptCount = 0;
      getScriptUrl = function(options) {
        if (options.china) {
          return 'http://maps.google.cn/maps/api/js?';
        } else {
          if (options.transport === 'auto') {
            return '//maps.googleapis.com/maps/api/js?';
          } else {
            return options.transport + '://maps.googleapis.com/maps/api/js?';
          }
        }
      };

      includeScript = function(options) {
        var omitOptions, query, script, key;
        omitOptions = ['transport', 'isGoogleMapsForWork', 'china'];
        if (options.isGoogleMapsForWork) {
          omitOptions.push('key');
        }
        query = '';
        for (key in options) {
          if (options.hasOwnProperty(key) && omitOptions.indexOf(key) === -1) {
            if (!query) {
              query += key + '=' + options[key];
            } else {
              query += '&' + key + '=' + options[key];
            }
          }
        }
        if (scriptId) {
          $document[0].getElementById(scriptId).remove();
        }

        script = $document[0].createElement('script');
        script.id = scriptId = 'ui_gmap_map_load_' + scriptCount++;
        script.type = 'text/javascript';
        script.src = getScriptUrl(options) + query;
        return $document[0].body.appendChild(script);
      };
      isGoogleMapsLoaded = function() {
        return angular.isDefined($window.google) && angular.isDefined($window.google.maps);
      };
      return {
        load: function(options) {
          var deferred, randomizedFunctionName, w = $window;
          deferred = $q.defer();
          if (isGoogleMapsLoaded()) {
            deferred.resolve($window.google.maps);
            return deferred.promise;
          }

          randomizedFunctionName = options.callback = 'onGoogleMapsReady' + Math.round(Math.random() * 1000);
          w[randomizedFunctionName] = function() {
            w[randomizedFunctionName] = null;
            deferred.resolve(w.google.maps);
          };
          if (w.navigator.connection && w.Connection && w.navigator.connection.type === w.Connection.NONE) {
            $document[0].addEventListener('online', function() {
              if (!isGoogleMapsLoaded()) {
                return includeScript(options);
              }
            });
          } else {
            includeScript(options);
          }
          return deferred.promise;
        }
      };
    });
})();

