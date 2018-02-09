'use strict';

/**
 * @ngdoc directive
 * @name monsterManagerApp.directive:nestedIcons
 * @description
 * # nestedIcons
 */
angular.module('monsterManagerApp')
  .directive('nestedIcons', function ($compile) {
    return {
      template:'{{tmpl}}',
      restrict: 'E',
      scope: {
        tmpl: '<',
        type: '<?',
        ngClass:'=?'
      },
      link:function(scope,element){
        var tmpl='<icon tmpl="\'%$2%\'" type="type"></icon>';
        var html = ('<span>'+scope.tmpl+'</span>').replace(/(%(\w+)%)/g, tmpl);
        var e=$compile(html)(scope);
        element.replaceWith(e);

      }
    };
  });
