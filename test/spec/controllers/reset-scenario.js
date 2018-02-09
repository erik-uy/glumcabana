'use strict';

describe('Controller: ResetScenarioCtrl', function () {

  // load the controller's module
  beforeEach(module('monsterManagerApp'));

  var ResetScenarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResetScenarioCtrl = $controller('ResetScenarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResetScenarioCtrl.awesomeThings.length).toBe(3);
  });
});
