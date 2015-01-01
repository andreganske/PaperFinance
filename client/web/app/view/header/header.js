'use strict';

var app = angular.module('myApp.header', ['ngRoute', 'ngMaterial']);

app.controller('headerCrtl', function($rootScope, $scope, $mdDialog) {
	$scope.login = 'Log in';
	$scope.signin = 'Sign in';
	$scope.signout = 'Sign out';

	$scope.currentUser = false;


	$scope.showLogin = function(ev) {
		$mdDialog.show({
			templateUrl: 'view/login/login.html',
			targetEvent: ev,
		})
		.then(function(answer) {
			$scope.validateUser();
		});
	};

	$scope.showSignin = function(ev) {
		$mdDialog.show({
			templateUrl: 'view/signin/signin.html',
			targetEvent: ev,
		})
		.then(function() {
			$scope.validateUser();
		});
	};

	$scope.doSignout = function(ev) {
		Parse.User.logOut();
		$scope.validateUser();		
	}

	$scope.validateUser = function() {
		var currentUser = Parse.User.current();
		if (currentUser) {
			$scope.logged = 'Bem vindo ' + currentUser.attributes.name;
			$scope.currentUser = true;
		} else {
			$scope.currentUser = false;
		}
	};

});