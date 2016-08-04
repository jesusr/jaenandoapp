var angular = require('angular');
require('angular-mocks');
var header = require('./header');

describe('header component', function() {
    beforeEach(function() {
        angular
            .module('jaenandoHeader', ['app/header.html'])
            .component('jaenandoHeader', header);
        angular.mock.module('jaenandoHeader');
    });

    it('should render \'Jaenando\'', angular.mock.inject(function($rootScope, $compile) {
        var element = $compile('<jaenando-header></jaenando-header>')($rootScope);
        $rootScope.$digest();
        var header = element.find('a');
        header.html().trim().should.equal('Jaenando');
    }));
});