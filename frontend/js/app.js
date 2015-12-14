angular
  .module('devigner', ['angular-jwt', 'ui.router', 'ngResource'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  });
  

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('users', {
      url: "/users",
      templateUrl: "views/users.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html"
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "views/signup.html"
    })
}