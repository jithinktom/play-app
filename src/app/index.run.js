(function() {
  'use strict';

  angular
    .module('comeLetsPlay')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
