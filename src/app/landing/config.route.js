(function(){
  'use strict';

  angular
  .module('app.module')
  .config(configFunction)

  configFunction.$inject = ['$routeProvider']

  function configFunction($routeProvider){
    $routeProvider.when('/',{
      templateUrl: 'app/landing/landing.html'
    });
  }

})();