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
router.get('/api/getScore', function(req, res, next) {
	let name = '其他人'
	let score = 95
	if (req.query.id==1) {
		name = 'xxq'
		score = 100
	}
	if (req.query.id==2){
		name = 'xch'
		score = 99
	}
  res.json({
  	name,
  	score,
  });
});
router.get('/api/getAge', function(req, res, next) {
  res.json({
  	age: 213
  });
});

module.exports = router;
