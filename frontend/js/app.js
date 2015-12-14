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
        templateUrl: "partials/home.html",
      })
      .state('products', {
        url: "/products",
        templateUrl: "partials/products.html",
      })
      .state('viewProduct', {
        url: "/products/:id",
        templateUrl: "partials/product.html",
        controller: 'ProductViewController'
      })
      .state('about', {
        url: "/about",
        templateUrl: "partials/about.html",
      })
      .state('login', {
        url: "/login",
        templateUrl: "partials/login.html"
      })
      .state('register', {
        url: "/register",
        templateUrl: "partials/register.html",
      })
      .state('cart', {
        url: "/cart",
        templateUrl: "partials/cart.html",
      });
}