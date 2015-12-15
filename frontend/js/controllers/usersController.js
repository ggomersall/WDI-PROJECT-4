angular
  .module('devigner')
  .controller('usersController', UserController);

UserController.$inject = ['User', 'TokenService', '$location'];
function UserController(User, TokenService, $location) {
  var self = this;

  self.all = [];
  self.user = {};

  function handleLogin(res) {
    var token = res.token ? res.token : null;

    if(token) {
      console.log(res)
      self.getUsers();
      self.user = TokenService.decodeToken();
    }
    self.message = res.message;
  };

  self.login = function() {
    User.login(self.user, handleLogin);
    // this redirects a user to certain path after login
    $location.path('/profile');

  };

  self.signup = function() {
    User.signup(self.user, handleLogin);
    $location.path('/profile');
  };

  self.logout = function() {
    TokenService.removeToken();
    self.all = [];
    self.user = {};
  };

  self.getUsers = function() {
    self.all = User.query();
    console.log(self.all)
  };

  self.isLoggedIn = function() {
    console.log('this works')
    return !!TokenService.getToken();
  }

  if(self.isLoggedIn()) {
    console.log('we are definitely in')
    self.getUsers();
    self.user = TokenService.decodeToken();
  };

  return self;
}




