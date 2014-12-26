'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',

  'myApp.home',
  'myApp.view2',
  
  'myApp.version'
])/*
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
  controller: 'myAppCtrl'
}])*/
.controller('AppCtrl', function($scope) {
	$scope.pages = [
		{
			name 	: 'home',
			link	: '#/view/home'
		},
		{
			name 	: 'view2',
			link	: '#/view2'
		}
	]
});