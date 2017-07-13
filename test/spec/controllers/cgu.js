'use strict';

describe('Controller: CguCtrl', function () {

  // load the controller's module
  beforeEach(module('baristaApp'));

  var CguCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CguCtrl = $controller('CguCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CguCtrl.awesomeThings.length).toBe(3);
  });
});
