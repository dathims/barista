"use strict";angular.module("goliathApp",["ngRoute","ngSanitize","ngTouch","angular-carousel"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("goliathApp").controller("MainCtrl",["$scope","$http","$rootScope",function(a,b,c){c.isLoad=!1,a.products=[],b.get("https://spreadsheets.google.com/feeds/list/13SOrx5_jlro0zNEXADBqzeMkdT7Nwp8xc954vZIKh64/od6/public/values?alt=json").success(function(b){c.isLoad=!0,a.products=b.feed.entry}).error(function(a){c.isLoad=!0,console.error(a)}),b.get("https://spreadsheets.google.com/feeds/list/1wcuIIt0LkPePVgFzViADJD07WrhAa-QNCSCCBywtHxM/od6/public/values?alt=json").success(function(b){a.box=b.feed.entry}).error(function(a){console.log(a)})}]),angular.module("goliathApp").run(["$templateCache",function(a){a.put("views/main.html",'<ul rn-carousel rn-carousel-controls rn-carousel-buffered class="landing"> <li ng-repeat="product in products"> <div class="media-img" style="background-image:url({{product.gsx$img.$t}})"></div> <div class="carousel"> <span class="push">Popular movies</span> <div class="denomination"> <h2 class="title">{{product.gsx$title.$t}}</h2> <span class="year" ng-hide="displayNode(product.gsx$type.$t)">{{product.gsx$type.$t}}</span> <span class="director" ng-hide="displayNode(product.gsx$director.$t)">{{product.gsx$director.$t}}</span> </div> <p class="description" ng-bind="product.gsx$description.$t"></p> <div class="linkTrailer"> <a ng-href="{{product.gsx$trailer.$t}}" class="trailer" ng-hide="displayNode(product.gsx$trailer.$t)"> ▸ Watch the trailer</a> <a ng-href="{{product.gsx$link.$t}}" class="hackit" ng-if="product.gsx$link.$t">Hack it</a> <span ng-href="" class="soon" ng-if="!product.gsx$link.$t">Coming soon</span> </div> </div> </li> </ul> <div class="fixed-bottom"> <div class="search"> ⚲ <input type="search" autocomplete="on" autofocus placeholder="search a movie"> </div> </div> <div class="content-box"> <ul class="clearfix"> <li ng-repeat="movie in box"> <div class="media-img" style="background-image:url({{movie.gsx$img.$t}})"></div> <div class="wrapper-li"> <div class="denomination"> <h2 class="title">{{movie.gsx$title.$t}}</h2> <span class="year" ng-hide="displayNode(movie.gsx$type.$t)">{{movie.gsx$type.$t}}</span> <!-- <span class="director" ng-hide="displayNode(movie.gsx$director.$t)">{{movie.gsx$director.$t}}</span> --> </div> <!-- <p class="description" ng-bind="movie.gsx$description.$t"></p> --> <div class="linkTrailer"> <a ng-href="{{movie.gsx$trailer.$t}}" class="trailer" ng-hide="displayNode(movie.gsx$trailer.$t)"> ▸ Watch the trailer</a> <a ng-href="{{movie.gsx$link.$t}}" class="hackit" ng-if="movie.gsx$link.$t">Hack it</a> <span ng-href="" class="soon" ng-if="!movie.gsx$link.$t">Coming soon</span> </div> </div> </li> </ul> </div>')}]);