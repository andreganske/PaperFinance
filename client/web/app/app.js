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
  
  Parse.initialize("17zBkYXCdSUNAgWF7yRwY7q8Dw5k21eG4H5YJ7Sw", "Z5Z5UnTpbVANInxsvGxtsIl8s2NnZAtBicYuk1Qy");

  $routeProvider.otherwise({ redirectTo: '/home' });

}]);

app.controller('AppCtrl', function($scope, $rootScope) {

    $rootScope.user = new Parse.User();

});