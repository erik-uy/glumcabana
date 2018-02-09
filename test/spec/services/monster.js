'use strict';

describe('Service: monster', function () {

  // load the service's module
  beforeEach(module('monsterManagerApp'));

  // instantiate service
  var monster;
  beforeEach(inject(function (_monster_) {
    monster = _monster_;
  }));

  it('should do something', function () {
    expect(!!monster).toBe(true);
  });

});
