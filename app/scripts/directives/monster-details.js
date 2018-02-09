'use strict';

/**
 * @ngdoc directive
 * @name monsterManagerApp.directive:monterDetails
 * @description
 * # monterDetails
 */
angular.module('monsterManagerApp')
  .directive('monsterDetails', function (monster) {
    return {
      templateUrl: '/views/monster-details.html',
      restrict: 'E',
      scope: {
          monsterName: '=',
          monsterLevel: '=?'
      },
      link: function postLink(scope, element, attrs) {
        scope.monster=monster.details[scope.monsterName];
        scope.monsterLevel=scope.monsterLevel||0;
      }
    };
  });
