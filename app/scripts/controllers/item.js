(function() {
'use strict';

/**
 * @ngdoc function
 * @name barista.controller:MainCtrl
 * @description
 * # ItemCtrl
 * Controller of the barista
 */
//1P-txsOva5v-KgCIhnz1QPHDmuN_vxavy2FKAbsiqKXM
  function itemCtrl($scope, $http, $routeParams, $sce, $window, drive) {
      var urlId = $routeParams.id;
      var vm = this;
      vm.product = {};
      vm.display = false;

      vm.config = {
          tracks: [
            {
              src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
              kind: 'subtitles',
              srclang: 'fr',
              label: 'Français',
              default: ''
            }
          ],
          theme: 'bower_components/videogular-themes-default/videogular.css'
        };
        
      vm.play = function(){
        vm.display = !vm.display;
      };

      vm.back = function(){
        $window.history.back();
      };

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
          vm.config.sources =  [
            {src: $sce.trustAsResourceUrl(res.gsx$link.$t), type: 'video/webm; codecs=vp8, vorbis'},
            {src: $sce.trustAsResourceUrl(res.gsx$link.$t), type: 'video/mp4'},
            {src: $sce.trustAsResourceUrl(res.gsx$link.$t), type: 'video/ogg'}
          ];
          vm.config.plugins = {
            poster: res.gsx$img.$t
          };
        }, function(error) {
          console.error(error);
        });
  }

  angular.module('barista')
    .controller('ItemCtrl', ['$scope', '$http', '$routeParams', '$sce', '$window', 'drive', itemCtrl]);
})();