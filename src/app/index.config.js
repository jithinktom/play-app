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
            .primaryPalette('purple', {
                'default': '900',
                'hue-1': '500', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '800', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A700'
            })
            .accentPalette('pink', {
                'default': '600'
            })
            .warnPalette('red', {
                'default': '700'
            });
  }

})();
