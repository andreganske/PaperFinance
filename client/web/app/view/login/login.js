var app = angular.module('myApp.login', ['ngRoute', 'ngMaterial']),
	user = new Parse.User();

app.controller('loginCrtl', function($scope, $mdDialog) {

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
			success: function(user) {
				user = this.user;
			},
			error: function(user, error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});
	};

});
