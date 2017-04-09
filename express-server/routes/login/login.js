var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
	console.log(req.body);
	res.json(true);
});

module.exports = router;