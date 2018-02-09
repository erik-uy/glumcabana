'use strict';

describe('Service: currentScenario', function () {

  // load the service's module
  beforeEach(module('monsterManagerApp'));

  // instantiate service
  var currentScenario;
  beforeEach(inject(function (_currentScenario_) {
    currentScenario = _currentScenario_;
  }));

  it('should do something', function () {
    expect(!!currentScenario).toBe(true);
  });

});
