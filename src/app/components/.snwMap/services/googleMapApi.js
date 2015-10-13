(function() {
  'use strict';
  angular.module('snwMap')
    .provider('GoogleMapApi', function() {
      this.options = {
        transport: 'https',
        isGoogleMapsForWork: false,
        language: 'en',
        china: false,
        v: '3',
        sensor: 'false'
      };
      this.configure = function(options) {
        angular.extend(this.options, options);
      };
      this.$get = [
        'uiGmapMapScriptLoader', (function(_this) {
          return function(loader) {
            return loader.load(_this.options);
          };
        })(this)
      ];
      return this;
    });
})();

