(function() {
  'use strict';
  var ddo = function() {
    return {
      link: function(scope) {
        angular.extend(scope, {
          list: [{
            'name': 'destinos',
            'class': 'destinos-link',
            'link': '/destinos'
          }, {
            'name': 'blog',
            'class': 'blog-link',
            'link': '/blog'
          }, {
            'name': 'acerca de',
            'class': 'acercade-link',
            'link': '/acercade'
          }]
        });
      },
      controller: 'navMenuCtrl',
      templateUrl: '/dist/tpls/navMenu/navMenu.html',
      scope: {}
    };
  };

  angular.module('app.navMenu')
    .directive('navMenu', ddo);
})();

