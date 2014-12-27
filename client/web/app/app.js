'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',

  'myApp.header',
  'myApp.footer',
  
  'myApp.home',
  'myApp.view2',
  
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
  		redirectTo: '/home/home.html',
  		controller: 'AppCtrl'
	});
}])
.controller('AppCtrl', function($scope) {

});