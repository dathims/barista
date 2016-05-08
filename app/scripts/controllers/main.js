'use strict';

/**
 * @ngdoc function
 * @name goliathApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goliathApp
 */
angular.module('goliathApp')
  .controller('MoviesCtrl', ['$scope', '$http', '$rootScope','$stateParams', function($scope, $http, $rootScope, $stateParams) {
  $rootScope.isLoad = false;
  $scope.products = [];

  var googlePrefix = 'https://spreadsheets.google.com/feeds/list/';
  var format = '?alt=json';
  var googleSuffix = '/od6/public/values';
  var moviesID = '1wcuIIt0LkPePVgFzViADJD07WrhAa-QNCSCCBywtHxM';
  var landingID = '13SOrx5_jlro0zNEXADBqzeMkdT7Nwp8xc954vZIKh64';

  $http.get(googlePrefix + landingID + googleSuffix +format)
    .success(function(data) {
      $rootScope.isLoad = true;
      $scope.products = data.feed.entry;
    }).
  error(function(error) {
    $rootScope.isLoad = true;
    console.error(error);
  });
  $http.get(googlePrefix + moviesID + googleSuffix + format)
    .success(function(data) {
      $scope.box = data.feed.entry;
      console.log($scope.box);
    }).error(function(error){
      console.log(error);
    });

  $scope.extractID = function(url){
    return url.split('/').pop();
  };

  if($stateParams.id){
    var paramId = '/' + $stateParams.id;
    $http.get(googlePrefix + moviesID + googleSuffix + paramId + format)
      .success(function(data) {
        $rootScope.isLoad = true;
        $scope.article = data.entry;
        $scope.mediaToggle = {
                  sources: [
                      {
                          src: $scope.article.gsx$link.$t,
                          type: 'video/mp4'
                      }
                  ],
                  tracks: [
                      {
                          kind: 'subtitles',
                          label: 'Français',
                          src: $scope.article.gsx$subtitle.$t,
                          srclang: 'fr',
                          default: true
                      }
                  ],
                  poster: $scope.article.gsx$portrait.$t
              };
      })
      .error(function(error) {
        $rootScope.isLoad = true;
        console.error(error);
      });
  };

  $scope.video = function(url) {
    $scope.source = url;
  };
  console.log('$stateParams ->',$stateParams);
  $scope.track = $stateParams.sub;
}]);
