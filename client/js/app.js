angular.module('app', [])
  .controller('ContactFormController', function ($http) {
    var form = this;

    form.contactresult = [];

    form.contact = [{
      value: '',
      label: 'First Name:',
      key: 'fname'
    }, {
      value: '',
      label: 'Last Name:',
      key: 'lname'
    }, {
      value: '',
      label: 'Address:',
      key: 'address'
    }, {
      value: '',
      label: 'Company:',
      key: 'company'
    }];

    form.submit = function () {
      console.log(form.contact);
      $http.post('/contact', angular.toJson(form.contact)).then(
        function successCallback(response) {
          form.get();
        },
        function errorCallback(response) {
          console.log(response);
        });
    };

    form.get = function () {
      $http.get('/contact').then(
        function successCallback(response) {
          console.log(response.data);
          form.contactresult = angular.fromJson(response.data);
        },
        function errorCallback(response) {

          console.log(respone);
        });
    };
  });