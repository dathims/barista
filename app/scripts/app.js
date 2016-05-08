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
    'angular-carousel',
    'vjs.video'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'MoviesCtrl',
      templateUrl: 'views/home.html'
    }).state('player', {
      url: '/movies/:id',
      params: {
        id: null
      },
      controller: 'MoviesCtrl',
      templateUrl: 'views/player.html'
    }).state('shows', {
      url: '/shows',
      controller: 'MoviesCtrl',
      templateUrl: 'views/shows.html'
    }).state('movies', {
      url: '/movies',
      controller: 'MoviesCtrl',
      templateUrl: 'views/movies.html'
    });

    $locationProvider.html5Mode(true);

  });
