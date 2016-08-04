var angular = require('angular');

var techsModule = require('./app/techs/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/common/header/header');
var title = require('./app/common/title/title');
var footer = require('./app/common/footer/footer');

require('./index.scss');

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('jaenandoHeader', header)
  .component('jaenandoTitle', title)
  .component('jaenandoFooter', footer);
