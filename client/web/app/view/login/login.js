'use strict';

var app = angular.module('myApp.login', ['ngRoute', 'ngMaterial']);

app.controller('loginCrtl', function($rootScope, $scope, $mdDialog) {

	$scope.login = 'Usuário';
	$scope.password = 'Senha';

	$scope.user = {
		username	: '',
		password 	: ''
    };

	$scope.hide = function() {
		$mdDialog.hide();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.doLogin = function() {
		Parse.User.logIn($scope.user.username, $scope.user.password, {
			success: function(retorno) {
				$rootScope.user = retorno;
				$mdDialog.hide();
			},
			error: function(user, error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});
	};

});
