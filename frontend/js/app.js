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
    .state('profile', {
      url: '/profile',
      templateUrl: '/views/profile.html',
      authenticate: true
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
    // .run(['$rootScope', '$state', 'LoginService',
    //     function($rootScope, $state, LoginService) {
    //       $state.go('login', {'toState': toState.name, 'toParams': toParams});
    //       // Change title based on the `data` object in routes
    //       $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    //         var requiresLogin = toState.data.requiresLogin;

    //         if (requiresLogin && !LoginService.check()) {
    //           event.preventDefault();
    //           $state.go($state.params.toState, $state.params.toParams);
    //         }

    //       });
    //     }
    //   ])

  $urlRouterProvider.otherwise("/");
}