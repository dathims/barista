'use strict';

/**
 * @ngdoc overview
 * @name hackApp
 * @description
 * # hackApp
 *
 * Main module of the application.
 */

// var HACKAPI-SHOW = '15s1txaljepJBT6bWaJNzoS4dxjH8HWql6icdAhqcPFA';
// var URL_DIST = 'http://0.0.0.0:3000';
// var URL_DIST = 'http://hackback.herokuapp.com';
// var URL_LOCAL = 'http://localhost:9000';
// var URL_BANNER_TVDB = 'http://thetvdb.com/banners/fanart/original/';
// var URL_POSTER_TVDB = 'http://thetvdb.com/banners/posters/';
angular
  .module('app', [
    'ngRoute',
    'ngTouch',
    'angular-carousel',
    'angular.filter',
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
