var angular = require('angular');
require('angular-mocks');
var title = require('./title');

describe('title component', function () {
  beforeEach(function () {
    angular
      .module('jaenandoTitle', ['app/title.html'])
      .component('jaenandoTitle', title);
    angular.mock.module('jaenandoTitle');
  });

  it('should render \'Allo, \'Allo!', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<jaenando-title></jaenando-title>')($rootScope);
    $rootScope.$digest();
    var title = element.find('h1');
    title.html().trim().should.equal('\'Allo, \'Allo!');
  }));
});
