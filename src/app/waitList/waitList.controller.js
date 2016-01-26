(function(){
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);
  WaitListController.$inject = ['$firebaseArray', 'FIREBASE_URL', 'partyService'];

  function WaitListController($firebaseArray, FIREBASE_URL, partyService){
    // vm is 'this' instance of controller instance
    // https://github.com/johnpapa/angular-styleguide#style-y032
    var vm = this;

    var fireParties = new Firebase(FIREBASE_URL + 'parties');
    var fireTextMessages = new Firebase(FIREBASE_URL + 'textMessages');


    vm.newParty = new partyService.Party();

    vm.parties = $firebaseArray(fireParties);

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