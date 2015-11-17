var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

module.exports = router;





/*
var register = require('./routes/register');
var login = require('./routes/login');
app.use('/register', register);
app.use('/login', login);
*/
