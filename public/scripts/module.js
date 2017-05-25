var app = angular.module('myMod', ['ngRoute']);


// add public/ back to templateUrl
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      controller: 'homeController',
      templateUrl: 'views/home.html'
    })
    .when('/about', {
      controller: 'aboutController',
      templateUrl: 'views/about.html'
    })
    .when('/portfolio', {
      controller: 'portfolioController',
      templateUrl: 'views/portfolio.html'
    })
    .otherwise({redirectTo:'/home'});
    $locationProvider.hashPrefix('');
  });
