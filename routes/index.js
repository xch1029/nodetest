var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getName', function(req, res, next) {
  res.json({
  	name: 'xch'
  });
});
router.get('/api/getName', function(req, res, next) {
  res.json({
  	name: 'xch'
  });
});
router.get('/api/getAge', function(req, res, next) {
  res.json({
  	age: 213
  });
});

module.exports = router;
