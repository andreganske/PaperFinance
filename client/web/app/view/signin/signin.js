'use strict';

var app = angular.module('myApp.signin', ['ngRoute', 'ngMaterial']);

app.controller('signinCrtl', function($rootScope, $scope, $mdDialog) {

	$scope.login = 'Usuário';
	$scope.password = 'Senha';
	$scope.email = 'Email';
	$scope.name = 'Nome completo';

	$scope.user = new Parse.User();

	$scope.hide = function() {
		$mdDialog.hide();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.doSignin = function() {
		var newUser = new Parse.User();
		newUser.set('username', $scope.user.username);
		newUser.set('name', $scope.user.name);
		newUser.set('email', $scope.user.email);
		newUser.set('password',	$scope.user.password);

		newUser.signUp (null, {
			success: function(user) {
				$rootScope.user = this.user;
				$mdDialog.hide();
			},
			error: function(user, error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});
	};

});
