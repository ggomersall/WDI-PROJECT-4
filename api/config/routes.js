var express     = require('express');
var router      = express.Router();
var passport    = require('passport');

var usersController = require('../controllers/usersController');
var authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/signup', authController.signup);

router.route('/users')
  .get(usersController.usersIndex)

router.route('/users/:id')
  .get(usersController.usersShow)
  .put(usersController.usersUpdate)
  .patch(usersController.usersUpdate)
  .delete(usersController.usersDelete)


module.exports = router;