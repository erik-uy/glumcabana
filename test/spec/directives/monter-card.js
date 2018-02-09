'use strict';

describe('Directive: monterCard', function () {

  // load the directive's module
  beforeEach(module('monsterManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<monter-card></monter-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the monterCard directive');
  }));
});
