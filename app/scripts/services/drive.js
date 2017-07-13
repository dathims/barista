'use strict';

/**
 * @ngdoc service
 * @name baristaApp.drive
 * @description
 * # drive
 * Service in the baristaApp.
 */
angular.module('baristaApp')
  .service('drive', ['$http', '$log', 'config', drive]);

function drive($http, $log, config) {
  var services = {
    getRessources : ressources,
    getRessourcesItem : ressourcesItem,
    url: config.urlMain,
    save: save,
    storage : []
  };
  return services;

  function ressources () {
    return $http.get(services.url + config.mainId + config.suffix + config.extension);
  };

  function ressourcesItem (itemId) {
    var id = '/'+ itemId;
    return $http.get(services.url + config.mainId + config.suffix + id + config.extension);
  };

  function save (list) {
    return localforage.setItem('items', list).then(function (res) {
      return localforage.getItem('items');
    });
  }
}
