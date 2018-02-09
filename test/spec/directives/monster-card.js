'use strict';

describe('Directive: monsterCard', function () {

  // load the directive's module
  beforeEach(module('monsterManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<monster-card></monster-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the monsterCard directive');
  }));
});
