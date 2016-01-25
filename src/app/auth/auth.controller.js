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
    vm.login = login;


    function register(user){
      return firebaseAuthObject.$createUser(user)
        .then(function(){
          vm.login(user);
        })
        .catch(function(error){
          console.log("nope"+ error)
        });
    }

    function login(user){
      return firebaseAuthObject.$authWithPassword(user)
        .then(function(loggedInUser){
          console.log("user: ", loggedInUser)


        })
        .catch(function(error) {
          console.log("nope read the error  "+ error + " your attempted password : "+ user.password + "your attempted email" + user.email)
        });
    }

  }

})();