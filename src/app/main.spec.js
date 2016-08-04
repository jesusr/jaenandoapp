var angular = require('angular');
var main = require('./main');

require('angular-mocks');

describe('main component', function() {
    beforeEach(function() {
        angular
            .module('app', ['app/main.html'])
            .component('app', main);
        angular.mock.module('app');
    });

    it('should render the header, title, techs and footer', angular.mock.inject(function($rootScope, $compile) {
        var element = $compile('<app>Loading...</app>')($rootScope);
        $rootScope.$digest();
        element.find('jaenando-header').length.should.equal(1);
        element.find('jaenando-title').length.should.equal(1);
        element.find('jaenando-techs').length.should.equal(1);
        element.find('jaenando-footer').length.should.equal(1);
    }));
});