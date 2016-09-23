'use strict';

/**
 * @ngdoc function
 * @name hackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackApp
 */
//1P-txsOva5v-KgCIhnz1QPHDmuN_vxavy2FKAbsiqKXM
angular.module('app')
  .controller('MainCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $rootScope.isLoad = false;
  $scope.products = [];
  $scope.searchList = [];
  $scope.result = [];

  $http.get("https://spreadsheets.google.com/feeds/list/13SOrx5_jlro0zNEXADBqzeMkdT7Nwp8xc954vZIKh64/od6/public/values?alt=json")
    .success(function(data) {
      $rootScope.isLoad = true;
      $scope.products = data.feed.entry;
      _.forEach($scope.products, function(item){
        $scope.searchList.push({
          title : item.gsx$title.$t,
          img : item.gsx$img.$t,
          type : item.gsx$type.$t,
          director : item.gsx$director.$t,
          description : item.gsx$description.$t,
          trailer : item.gsx$trailer.$t,
          link : item.gsx$link.$t,
          category : item.gsx$category.$t
        });
      });
      $scope.result = $scope.searchList;
     console.log($scope.result);
    }).
  error(function(error) {
    $rootScope.isLoad = true;
    console.error(error);
  });

  $scope.selectMovie = function(obj) {
    $scope.result = [obj];
    $scope.searchMovie = '';
  };

  $rootScope.refresh = function() {
    $scope.searchMovie = '';
    $scope.result = $scope.searchList;    
  };

}]);
