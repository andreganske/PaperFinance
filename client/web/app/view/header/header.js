var app = angular.module('myApp.header', ['ngRoute', 'ngMaterial']);

app.controller('headerCrtl', function($scope, $mdDialog) {
	$scope.login = 'Log in';
	$scope.signin = 'Sign in';


	$scope.showLogin = function(ev) {
		$mdDialog.show({
			templateUrl: 'view/login/login.html',
			targetEvent: ev,
		})
		.then(function(answer) {
			$scope.alert = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.alert = 'You cancelled the dialog.';
		});
	};

	$scope.showSignin = function(ev) {
		$mdDialog.show({
			templateUrl: 'view/signin/signin.html',
			targetEvent: ev,
		})
		.then(function(answer) {
			$scope.alert = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.alert = 'You cancelled the dialog.';
		});
	};
});