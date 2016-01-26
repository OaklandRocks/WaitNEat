(function(){
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);
  WaitListController.$inject = ['firebaseDataService', 'partyService'];

  function WaitListController(firebaseDataService, partyService){
    // vm is 'this' instance of controller instance
    // https://github.com/johnpapa/angular-styleguide#style-y032
    var vm = this;

    vm.newParty = new partyService.Party();

    vm.parties = partyService.parties;

    vm.addParty = addParty;
    vm.removeParty = removeParty;
    vm.sendTextMessage = sendTextMessage;
    vm.toggleDone = toggleDone;

    function addParty(){
      vm.parties.$add(vm.newParty);
      vm.newParty = new partyService.Party();
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
      firebaseDataService.textMessages.push(newTextMessage);
      butts.notified = true;
      vm.parties.$save(butts);
    }

    function toggleDone(butts){
      // save any changes up to firebase
      vm.parties.$save(butts);
    }

  }

})();