'use strict';

/**
 * @ngdoc overview
 * @name templateTestApp
 * @description
 * # templateTestApp
 *
 * Main module of the application.
 */
angular
  .module('templateTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
      })
      .state('offers', {
        url: '/tilbud',
        templateUrl: 'views/offers.html'
      })
      .state('about', {
        url: '/om',
        templateUrl: 'views/about.html'
      })
      .state('publications', {
        url: '/publikationer',
        templateUrl: 'views/publications.html'
      });
  });
  /*.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/offers', {
        templateUrl: 'views/offers.html',
        controller: 'OffersCtrl',
        controllerAs: 'offers'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('publications',{
        templateUrl: 'views/publications.html',
        controller: 'PublicationsCtrl',
        controllerAs: 'publications'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/
