var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',

  'myApp.header',
  'myApp.footer',

  'myApp.login',
  'myApp.signin',
  
  'myApp.home',
  'myApp.view2',
  
  'myApp.version'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
  		redirectTo: '/home/home.html',
  		controller: 'AppCtrl'
	});

  Parse.initialize("17zBkYXCdSUNAgWF7yRwY7q8Dw5k21eG4H5YJ7Sw", "Z5Z5UnTpbVANInxsvGxtsIl8s2NnZAtBicYuk1Qy");
  
}]);

app.controller('AppCtrl', function($scope) {

});