'use strict';

/**
 * @ngdoc directive
 * @name monsterManagerApp.directive:monsterCard
 * @description
 * # monsterCard
 */
angular.module('monsterManagerApp')
  .directive('monsterCard', function () {
    return {
      templateUrl: '/views/monster-card.html',
      restrict: 'E',
      scope: {
        info: '=',
        elite: '=?'
      },
      link: function postLink(scope, element, attrs) {
        scope.getAttribute=function(attr){
          var breakdown=(attr||'').match(/%(\w+)%\s?(.*)/);
          return {
            img:breakdown[1],
            txt:breakdown[2]
          };
        };
      }
    };
  });
