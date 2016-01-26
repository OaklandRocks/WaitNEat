(function(){
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject =['$location', 'authService']

  function AuthController($location, authService){
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };

    vm.register = register;
    vm.login = login;
    vm.logout = logout;


    function register(user){
      return authService.register(user)
        .then(function(){
          vm.login(user);
        })
        .catch(function(error){
          console.log("nope"+ error)
        });
    }

    function login(user){
      return authService.login(user)
        .then(function(loggedInUser){
          console.log("user: ", loggedInUser)
          $location.path('/waitList')


        })
        .catch(function(error) {
          console.log("nope read the error  "+ error + " your attempted password : "+ user.password + "your attempted email" + user.email)
        });
    }
    function logout() {
      console.log("LOGGGINIG OUT")
      authService.logout();
      $location.path('/');
    }

  }

})();