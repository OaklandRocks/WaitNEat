(function(){
  'use strict';

  angular
  .module('app',[
    // Angular Module
    'ngRoute',
    // Third-party modules.
    'firebase',
    // custom modules yoo.
    'app.auth',
    'app.core',
    'app.landing',
    'app.waitList'

    ]);


})();
