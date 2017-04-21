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
      })
      .state('detail', {
        url: '/event/:id',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail'
      })
      .state('notfound', {
        url: '/error',
        templateUrl: 'app/error/error.html',
        controller: 'ErrorController',
        controllerAs: 'error'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true)
  }

})();
