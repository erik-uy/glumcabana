'use strict';

/**
 * @ngdoc overview
 * @name monsterManagerApp
 * @description
 * # monsterManagerApp
 *
 * Main module of the application.
 */
angular
  .module('monsterManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'ngTagsInput',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/monster-setup.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/play', {
        templateUrl: 'views/monster-play.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/reset-scenario', {
        templateUrl: 'views/about.html',
        controller: 'ResetScenarioCtrl',
        controllerAs: 'resetScenario'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
