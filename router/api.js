let express  = require('express');
let router   = express.Router();
let tools    = require('../commonjs/tool');

router.get('/test', function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	let mockData = tools.getMockData('test');
	res.send(mockData);
});

module.exports = router;