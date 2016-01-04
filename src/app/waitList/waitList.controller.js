(function(){
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);
  WaitListController.$inject = ['$firebaseArray'];

  function WaitListController($firebaseArray){
    // vm is 'this' instance of controller instance
    // https://github.com/johnpapa/angular-styleguide#style-y032
    var vm = this;

    var fireParties = new Firebase('https://waitandeat-demo-ve.firebaseio.com/');
    vm.parties = $firebaseArray(fireParties);

    vm.addParty = addParty;

    function addParty(){
      vm.parties.$add('another');
    }

  }

})();