
(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/auth/register.html',
      controller: 'AuthController',
      contorllerAs: 'vm'
    });
  }

})();