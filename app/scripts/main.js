var app = angular.module('fp',['ngRoute'])
'use strict'

app.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    templateUrl : 'views/home.html',
    controller : 'MainCtrl'
  })
  .when('/users',{
    templateUrl : 'views/users.html',
    controller : 'UserCtrl'
  })
  .otherwise({
    redirectTo : '/'
  });
}]);


var serviceModule = angular.module('ServiceModule',[])
