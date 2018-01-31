'use strict';

describe('Controller: ManageRequestsCtrl', function () {

  // load the controller's module
  beforeEach(module('bigmalApp'));

  var ManageRequestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageRequestsCtrl = $controller('ManageRequestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
