letexpress = require('express');

letapp = module.exports = express();

letbodyParser = require('body-parser');

letallowCors = (req, res, next) => {
	
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
}

app.listen(5000);

app.use(allowCors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	
	extended: true
}));