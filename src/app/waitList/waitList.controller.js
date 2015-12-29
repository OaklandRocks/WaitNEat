(function(){
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

  function WaitListController(){
    // vm is 'this' instance of controller instance
    // https://github.com/johnpapa/angular-styleguide#style-y032
    var vm = this;

    vm.parties = ["data flowing"];

  }

})();