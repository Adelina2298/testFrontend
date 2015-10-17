'use strict';

angular
  .module('link2App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/affiliates/tools/link2', {
        templateUrl: 'views/link2.html',
        controller: 'Link2Ctrl',
        controllerAs: 'link2'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
