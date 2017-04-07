(function () {
  'use strict';

  angular
    .module('comeLetsPlay')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $mdThemingProvider.theme('default')
      .primaryPalette('teal', {
        'default': '500',
        'hue-1': '800',
        'hue-2': '900',
        'hue-3': '700'
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('indigo', {
        'default': '200'
      });
  }

})();
