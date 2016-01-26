(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('textMessageService', textMessageService)
  textMessageService.$inject = ['firebaseDataService']
  function textMessageService(firebaseDataService) {
    var service = {
      sendTextMessage: sendTextMessage
    };

    return service;

    //////////////////////

    function sendTextMessage(butts, parties){
      var newTextMessage = {
        phoneNumber: butts.phone,
        size: butts.size,
        name: butts.name
      }
      firebaseDataService.textMessages.push(newTextMessage);
      butts.notified = true;
      parties.$save(butts);
    }

  }

})();