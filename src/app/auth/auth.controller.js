(function(){
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject =['$firebaseAuth']
  function AuthController($firebaseAuth){

  }

})();