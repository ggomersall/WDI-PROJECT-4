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
      data: {'requiresLogin': false},
      params: { 
        'toState': 'profile', // default state to proceed to after login
        'toParams': {}
      },
      url: "/login",
      templateUrl: "views/login.html"
    })
    .state('signup', {
      data: {'requiresLogin': false},
      params: { 
        'toState': 'profile', // default state to proceed to after login
        'toParams': {}
      },
      url: "/signup",
      templateUrl: "views/signup.html"
    })

  $urlRouterProvider.otherwise("/");
}