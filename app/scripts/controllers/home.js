'use strict';

/**
 * @ngdoc function
 * @name barista.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the barista
 */
angular.module('barista')
  .controller('HomeCtrl', ['$http', '$log', 'drive', HomeCtrl]);

  function HomeCtrl($http, $log, drive){
    var vm = this;
    vm.list = [];

    drive.getRessources()
      .then(function(result){
        var res = result.data.feed.entry;
        _.forEach(res, function(item){
          vm.list.push({
            ressource: slitRessource(item.id.$t),
            title : item.gsx$title.$t,
            img : item.gsx$img.$t,
            type : item.gsx$type.$t,
            director : item.gsx$director.$t,
            description : item.gsx$description.$t,
            trailer : item.gsx$trailer.$t,
            link : item.gsx$link.$t,
            category : item.gsx$category.$t,
            episode : item.gsx$episode.$t
          });

          function slitRessource(media){
            return media.split('/values/')[1];
          };
        });
        drive.save(vm.list).then(function (value) {
          // we got our value
          drive.storage = value;
          console.log(drive.storage);
        }).catch(function (err) {
          // we got an error
          console.error(err);
        });
      }, function(err){
        $log.error('error', err);
      });
  };
