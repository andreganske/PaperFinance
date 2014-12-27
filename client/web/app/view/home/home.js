'use strict';

var app = angular.module('myApp.home', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view/home/home.html',
    controller: 'homeCtrl'
  });
}]);

app.controller('homeCtrl', [function() {

}]);