'use strict';

(function() {
  var domReadyHandlers = [];

  // setup global vars
  window.assert = chai.assert;
  window.domready = domready;
  window.invokeDomReady = invokeDomReady;

  beforeEach(
    module('EnfagrowApp.constants', function($provide) {
      $provide.constant('ENFAGROW_CONFIG', {
        apiUrl: 'http://testurl.com'
      });
    })
  );

  function domready(readyHandler) {
    domReadyHandlers.push(readyHandler);
  }

  function invokeDomReady() {
    domReadyHandlers.forEach(function(handler) {
      handler();
    });
  }
})();
