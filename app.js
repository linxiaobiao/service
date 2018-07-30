let express    = require('express');
let bodyParser = require('body-parser');
let swig       = require('swig');
let app        = express();

app.use('/public', express.static(__dirname + '/public'));
app.use( bodyParser.urlencoded({ extended: true }) );
app.use('/api', require('./router/api'));
app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');


app.get('/', function(req, res, next) {
	res.render('index')
})


app.listen(8999);
console.log('监听8999端口成功')