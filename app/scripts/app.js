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
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'angular-carousel'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('movies', {
      url: '/',
      controller: 'MoviesCtrl',
      templateUrl: 'views/movies.html'
    });

    $locationProvider.html5Mode(true);

  });
