angular
  .module('devigner')
  .controller('usersController', UserController);

UserController.$inject = ['User', 'TokenService'];
function UserController(User, TokenService) {
  var self = this;

  self.all = [];
  self.user = {};

  function handleLogin(res) {
    var token = res.token ? res.token : null;

    if(token) {
      self.getUsers();
      self.user = TokenService.decodeToken();
    }
    self.message = res.message;
  };

  self.login = function() {
    User.login(self.user, handleLogin);
  };

  self.signup = function() {
    User.signup(self.user, handleLogin);
  };

  self.logout = function() {
    TokenService.removeToken();
    self.all = [];
    self.user = {};
  };

  self.getUsers = function() {
    self.all = Users.query();
  };

  self.isLoggedIn = function() {
    return !!TokenService.getToken();
  }

  if(self.isLoggedIn()) {
    self.getUsers();
    self.user = TokenService.decodeToken();
  };

  return self;
}




