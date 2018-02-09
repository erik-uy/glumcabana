'use strict';

/**
 * @ngdoc function
 * @name monsterManagerApp.controller:ResetScenarioCtrl
 * @description
 * # ResetScenarioCtrl
 * Controller of the monsterManagerApp
 */
angular.module('monsterManagerApp')
  .controller('ResetScenarioCtrl', function ($cookies,$location,currentScenario) {
    console.log('resetting cookies');
    currentScenario.reset();
    $location.url('/');
  });
