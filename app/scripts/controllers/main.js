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

  $http.get('https://spreadsheets.google.com/feeds/list/13SOrx5_jlro0zNEXADBqzeMkdT7Nwp8xc954vZIKh64/od6/public/values?alt=json')
    .success(function(data) {
      $rootScope.isLoad = true;
      $scope.products = data.feed.entry;
    }).
  error(function(error) {
    $rootScope.isLoad = true;
    console.error(error);
  });

  $http.get('https://spreadsheets.google.com/feeds/list/1wcuIIt0LkPePVgFzViADJD07WrhAa-QNCSCCBywtHxM/od6/public/values?alt=json')
    .success(function(data) {
      $scope.box = data.feed.entry;
    }).error(function(error){
      console.log(error);
    });

  $scope.video = function(url) {
    $scope.source = url;
  };
  console.log('$stateParams.url ->',$stateParams);
  $scope.mediaToggle = {
            sources: [
                {
                    src: $stateParams.url,
                    type: 'video/mp4'
                }
            ],
            tracks: [
                {
                    kind: 'subtitles',
                    label: 'Français',
                    src: $stateParams.sub,
                    srclang: 'fr',
                    default: true
                },
                {
                    kind: 'subtitles',
                    label: 'Français SRT',
                    src: $stateParams.sub,
                    srclang: 'fr',
                    default: true
                }
            ],
            poster: $stateParams.img
        };

}]);
