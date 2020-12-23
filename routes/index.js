var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.path = req.path;
  res.render('dashboard', { title: 'Express' });
});

router.get('/tcp', function(req, res, next) {
  res.locals.path = req.path;
  res.render('tcp');
});

module.exports = router;
