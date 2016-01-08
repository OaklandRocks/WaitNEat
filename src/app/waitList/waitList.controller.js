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

    var fireParties = new Firebase('https://waitandeat-demo-ve.firebaseio.com/parties');
    var fireTextMessages = new Firebase('https://waitandeat-demo-ve.firebaseio.com/textMessages');

    function Party() {
      this.name ='';
      this.phone ='';
      this.size = '';
      this.done = false;
      this.notified = false;
    }

    vm.newParty = new Party();

    vm.parties = $firebaseArray(fireParties);

    vm.addParty = addParty;
    vm.removeParty = removeParty;
    vm.sendTextMessage = sendTextMessage;
    vm.toggleDone = toggleDone;

    function addParty(){
      vm.parties.$add(vm.newParty);
      vm.newParty = new Party();
    }

    function removeParty(butts){
      vm.parties.$remove(butts);
    }

    function sendTextMessage(butts){
      var newTextMessage = {
        phoneNumber: butts.phone,
        size: butts.size,
        name: butts.name
      }
      fireTextMessages.push(newTextMessage);
      butts.notified = true;
      vm.parties.$save(butts);
    }

    function toggleDone(butts){
      // save any changes up to firebase
      vm.parties.$save(butts);
    }

  }

})();