(function () {
  'use strict';

  angular
    .module('comeLetsPlay')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('list', {
        url: '/sport',
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        controllerAs: 'list'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true)
  }

})();
