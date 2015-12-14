angular
  .module('devigner', ['angular-jwt', 'ui.router', 'ngResource'])
  .constant('API', 'http://localhost:3000/api')
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  })
  .config(MainRouter)

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/home.html",
      })
      .state('products', {
        url: "/users",
        templateUrl: "views/users.html",
      })
      .state('viewProduct', {
        url: "/products/:id",
        templateUrl: "views/product.html",
        controller: 'ProductViewController'
      })
      .state('about', {
        url: "/about",
        templateUrl: "views/about.html",
      })
      .state('login', {
        url: "/login",
        templateUrl: "views/login.html"
      })
      .state('register', {
        url: "/register",
        templateUrl: "views/register.html",
      })
      .state('cart', {
        url: "/cart",
        templateUrl: "views/cart.html",
      });
}