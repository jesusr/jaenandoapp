var angular = require('angular');
require('angular-mocks');
var footer = require('./footer');

describe('footer component', function() {
    beforeEach(function() {
        angular
            .module('jaenandoFooter', ['app/footer.html'])
            .component('jaenandoFooter', footer);
        angular.mock.module('jaenandoFooter');
    });

    it('should render \'Jaenando\'', angular.mock.inject(function($rootScope, $compile) {
        var element = $compile('<jaenando-footer></jaenando-footer>')($rootScope);
        $rootScope.$digest();
        var footer = element.find('a');
        footer.html().trim().should.equal('Jaenando');
    }));
});