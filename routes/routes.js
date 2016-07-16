console.log('Routes working');

angular.module('BooztMeApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../templates/home.html',
      controller: 'home'
    })
    .when('/users', {
        templateUrl: '../templates/users-index.html',
        controller: 'users-index'
    })
    .when('/users/:id', {
        templateUrl: '../templates/user-show.html',
        controller: 'user-show'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
})

