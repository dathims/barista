'use strict';

/**
 * @ngdoc overview
 * @name barista
 * @description
 * # barista
 *
 * Main module of the application.
 */

// var HACKAPI-SHOW = '15s1txaljepJBT6bWaJNzoS4dxjH8HWql6icdAhqcPFA';
angular
  .module('barista', [
    'ngRoute',
    'ngTouch',
    'angular-carousel',
    'angular.filter',
    'com.2fdevs.videogular'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/media/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl',
        controllerAs: 'items'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
