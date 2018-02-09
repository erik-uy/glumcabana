'use strict';

describe('Directive: nestedIcons', function () {

  // load the directive's module
  beforeEach(module('monsterManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nested-icons></nested-icons>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nestedIcons directive');
  }));
});
