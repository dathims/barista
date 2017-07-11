'use strict';

/**
 * @ngdoc function
 * @name barista.controller:MainCtrl
 * @description
 * # ItemCtrl
 * Controller of the barista
 */
//1P-txsOva5v-KgCIhnz1QPHDmuN_vxavy2FKAbsiqKXM
angular.module('barista')
  .controller('ItemCtrl', ['$scope', '$http', '$routeParams', '$sce', 'drive',
  function($scope, $http, $routeParams, $sce, drive) {
    var urlId = $routeParams.id;
    var vm = this;
    vm.product = {};

    vm.config = {
				sources: [
					{src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.mp4'), type: 'video/mp4'},
					{src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.webm'), type: 'video/webm'},
					{src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.ogg'), type: 'video/ogg'}
				]};

    drive.getRessourcesItem(urlId)
      .then(function(result) {
        var res = result.data.entry;
        vm.product.title = res.gsx$title.$t;
        vm.product.img = res.gsx$img.$t;
        vm.product.type = res.gsx$type.$t;
        vm.product.director = res.gsx$director.$t;
        vm.product.description = res.gsx$description.$t;
        vm.product.trailer = res.gsx$trailer.$t;
        vm.product.link = res.gsx$link.$t;
        vm.product.category = res.gsx$category.$t;
        vm.product.episode = res.gsx$episode.$t;
      }, function(error) {
        console.error(error);
      });
}]);
