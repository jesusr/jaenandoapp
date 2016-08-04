var angular = require('angular');
require('angular-mocks');
var tech = require('./tech');

describe('tech component', function() {
    beforeEach(function() {
        angular
            .module('jaenandoTech', ['app/techs/tech.html'])
            .component('jaenandoTech', tech);
        angular.mock.module('jaenandoTech');
    });

    it('should render Gulp', angular.mock.inject(function($rootScope, $compile) {
        var $scope = $rootScope.$new();
        $scope.fixture = {
            key: 'gulp',
            title: 'Gulp',
            logo: 'http://fountainjs.io/assets/imgs/gulp.png',
            text1: 'The streaming build system',
            text2: 'Automate and enhance your workflow'
        };
        var element = $compile('<jaenando-tech tech="fixture"></jaenando-tech>')($scope);
        $scope.$digest();
        var tech = element.find('h3');
        tech.html().trim().should.equal('Gulp');
    }));
});