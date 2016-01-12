(function(){
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject =['$firebaseAuth']

  function AuthController($firebaseAuth){
    var vm = this;
    // firebase reference
    var firebaseReference = new Firebase('https://waitandeat-demo-ve.firebaseio.com/register');
    var firebaseAuthObject = $firebaseAuth(firebaseReference);

    vm.user = {
      email: '',
      password: ''
    };

    vm.register = register;


    function register(user){
      return firebaseAuthObject.$createUser(user)
        .then(function(user){
          console.log("user: ", user)
        })
        .catch(function(){
          console.log("nope")
        });
    }

  }

})();