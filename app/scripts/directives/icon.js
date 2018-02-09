'use strict';

/**
 * @ngdoc directive
 * @name monsterManagerApp.directive:icon
 * @description
 * # icon
 */
angular.module('monsterManagerApp')
  .directive('icon', function () {
    return {
      template: '<img src="{{imgsrc}}" class="{{type}}" ng-if="imgsrc"> <span class="icon-label">{{text}}</span>',
      restrict: 'E',
      scope: {
        tmpl: '<',
        type: '<?',
        ngClass:'=?'
      },
      link: function postLink(scope, element, attrs) {
        var tmpl = scope.tmpl||'';
        var matcher = tmpl.match(/(%(\w+)%)?\s?(.*)/);
        scope.type=scope.type||'general-icons';
        scope.imgsrc = !!matcher[2]?'/images/'+(scope.type=scope.type)+'/'+(matcher[2]||'')+'.png':null;
        scope.text = matcher[3]||'';
      }
    };
  });
