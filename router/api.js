let express  = require('express');
let router   = express.Router();
let tools    = require('../commonjs/tool');

// 移动账单：邮件列表
router.post('/searchMessages_mobile', function(req, res, next) {
	let mockData = tools.getMockData('searchMessages_mobile');
	res.send(mockData);
});

// 移动账单：搜索接口
router.post('/listMessages_mobile', function(req, res, next) {
	let mockData = tools.getMockData('listMessages_mobile');
	res.send(mockData);
});

// 日历订阅
router.post('/getCalendarsByLabel', function(req, res, next) {
	let mockData = tools.getMockData('calendar_label');
	res.send(mockData);
});

module.exports = router;