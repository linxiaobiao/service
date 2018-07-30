let fs   = require('fs');
let Mock = require('mockjs');
// let parseXML = require('xml2js').parseString;

let tools = {
    getMockData: fileName => {
        let filepath = './data/' + fileName + '.json';
        let readFile = fs.readFileSync(filepath, 'utf-8');
        // 占位符
        let Random   = Mock.Random;
        Random.extend({
        	state: function () {
        		let serviceCode = ['S_OK', 'error'];
        		return this.pick(serviceCode)
        	}
        });
        Random.state();
        let mockdata = Mock.mock(JSON.parse(readFile));
        return mockdata
    },
    getParams: (req, callback) => {
        let json = {};
        req.rawBody = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk) { 
            req.rawBody += chunk;
        });
        req.on('end', function() {
            parseXML(req.rawBody, function (err, result) {
                callback(result)
            });
        });
    }
}



module.exports = tools;