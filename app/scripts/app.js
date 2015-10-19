'use strict';

angular
  .module('link2App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'base64',
    'ngTagsInput'
  ])
  .run(function($rootScope, $location, $anchorScroll, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();  
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    //enable CSRF
    $httpProvider.defaults.xsrfCookieName= 'CSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName= 'X-CSRF-TOKEN';

    $urlRouterProvider.otherwise('/affiliates/dashboard');
    $stateProvider
    .state('dashboard', {
        url: "/affiliates/dashboard",
        templateUrl: 'views/main.html'
    })
    .state('affiliate', {
        url: "/affiliates/affiliate",
        templateUrl: 'views/main.html'
    })
    .state('commissions', {
        url: "/affiliates/commissions",
        templateUrl: 'views/main.html'
    })
    .state('statistics', {
        url: "/affiliates/statistics",
        templateUrl: 'views/main.html'
    })
    .state('link2', {
        url: "/affiliates/tools/link2",
        templateUrl: 'views/link2.html',
        controller: 'Link2Ctrl'
    })
    .state('banners', {
        url: "/affiliates/tools/banners",
        templateUrl: 'views/main.html'
    })
    .state('product', {
        url: "/affiliates/tools/product",
        templateUrl: 'views/main.html'
    })
    .state('feeds', {
        url: "/affiliates/tools/feeds",
        templateUrl: 'views/main.html'
    })
    .state('messages', {
        url: "/affiliates/messages",
        templateUrl: 'views/main.html'
    })
    .state('settings', {
        url: "/affiliates/settings",
        templateUrl: 'views/main.html'
    });
  });
