const app = require('./app_config.js');

const userController = require('./controller/userController.js');

const validator = require('validator');

app.get('/', (req, res) => {
	
	res.end('Servidor ON!');
});

app.get('/users', (req, res) => {
	
	userController.list((resp) => {
		
		res.json(resp);
	});
});

app.get('/users/:id', (req, res) => {
	
	let id = validator.trim(validator.escape(req.param('id')));

	userController.user(id, (resp) => {
		
		res.json(resp);
	});
});

app.post('/users', (req, res) => {

	let fullname = validator.trim(validator.escape(req.param('fullname')));
	let email = validator.trim(validator.escape(req.param('email')));
	let password = validator.trim(validator.escape(req.param('password')));
	let status = validator.trim(validator.escape(req.param('status')));

	userController.save(fullname, email, password, status, (resp) => {
		
		res.json(resp);
	});
});

app.put('/users', (req, res) => {

	let id = req.param('id');
	let fullname = req.param('fullname');
	let email = req.param('email');
	let password = req.param('password');
	let status = req.param('status')

	userController.update(id, fullname, email, password, status, (resp) => {
		
		res.json(resp);
	});
});

app.delete('/users/:id', (req, res) => {
	
	let id = req.param('id');

	userController.delete(id, (resp) => {
		
		res.json(resp);
	});
});