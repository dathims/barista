'use strict';

/**
 * @ngdoc overview
 * @name goliathApp
 * @description
 * # goliathApp
 *
 * Main module of the application.
 */
angular
  .module('goliathApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-carousel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
