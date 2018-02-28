var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET CODE. */
router.get('/:code', function(req, res, next) {
  res.render('redirect', { title: 'REDIRECTING...' });
});

module.exports = router;
