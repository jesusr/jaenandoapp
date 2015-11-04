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
      controller: 'footerCtrl',
      templateUrl: '/app/components/footer/footer.html',
      scope: {}
    };
  };

  angular.module('app.footer')
    .directive('footerNav', ddo);
})();

