var localStrategy = require("passport-local").Stategy;
var User = require('../models/user');

module.exports = function(passport){

  passport.use('local-signup', new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  }, function(req, email, password, done) {

    // find a user with the email
    User.find({ 'local.email' : email }, function(err, user) {
      // error
      if(err) return done(err, false, { message: "Ooops,  something went wrong." });

      // no error but already registered 
      if(user) return done(null, false, { message: "Please choose another email" });

      var newUser = new User();
      newUser.local.email = email;
      newUser.local.username = req.body.username;
      newUser.local.fullname = req.body.fullname;
      newUser.local.password = User.encrypt(password);

      newUser.save(function(err, user) {
        // if error
        if(err) return done(err, false, { message: "Ooops,  something went wrong." });

        // no errors
        return done(null, user);
      });
    });
  }));
}