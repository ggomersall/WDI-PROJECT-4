var User = require('../models/user');

function usersIndex(req, res) {
  User.find(function(err, users) {
    if(err) return res.status(404),json({ message: "Ooops,  something went wrong." });
    res.status(200).json({ users: user });
  });
};

function userShow(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(404).json({ message: "Ooops,  something went wrong." });
    res.status(200).json({ user: user });
  });
};

function userUpdate(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) return res.status(500).json({ message: "Ooops,  something went wrong." });
    if(!user) return res.status(404).json({ message: "That user could not be found!" });

    if(req.body.email) user.local.email = req.body.email;
    if(req.body.password) user.local.password = req.body.password;
    if(req.body.username) user.local.username = req.body.username;
    if(req.body.fullname) user.local.fullname = req.body.fullname;
    if(req.body.availability) user.local.availability = req.body.availability;
    if(req.body.user_image) user.local.user_image = req.body.user_image;

    user.save(function(err) {
      if (err) return res.status(500).json({ message: "Ooops,  something went wrong." });
      res.status(201).json({ message: "Your profile has been updated" });
    });
  });
};

function userDelete(req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err) {
    if(err) return res.status(404).json({ message: "Ooops,  something went wrong." });
    res.status(200).json({ message: "User has been deleted!"});
  });
};



module.exports = {
  usersIndex: usersIndex,
  userShow: userShow,
  userUpdate: userUpdate,
  userDelete: userDelete
}