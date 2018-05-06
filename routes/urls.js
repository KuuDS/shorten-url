var express = require('express');
var router = express.Router();
var util = require('../lib/util');


router.post('/', function(req, res, next) {
  var url = req.params.url;
});

/* GET URL. */
router.get('/:code', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





module.exports = router;