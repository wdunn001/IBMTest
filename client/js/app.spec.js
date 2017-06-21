'use strict';

describe('Controller: ContactFormController', function () {
  beforeEach(module('app'));

  var ContactFormController,
    scope;


  beforeEach(inject(function ($controller, $rootScope) {    
    scope = $rootScope.$new();
    ContactFormController = $controller('ContactFormController', {
      $scope: scope
    });

  }));

  it('Array should have 4 elements', function () {
    expect(ContactFormController.contact.length).toBe(4);
  });
  
});