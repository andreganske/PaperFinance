var app = angular.module('myApp.header', ['ngRoute', 'ngMaterial']);

app.controller('headerCrtl', function($scope) {
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