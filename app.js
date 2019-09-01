const app = require('./app_config.js');

const userController = require('./controller/userController.js');

const payController = require('./controller/payController.js');

const goalController = require('./controller/goalController.js');

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



app.get('/pays', (req, res) => {
	
	payController.list((resp) => {
		
		res.json(resp);
	});
});

app.get('/pays/:id', (req, res) => {
	
	let id = validator.trim(validator.escape(req.param('id')));

	payController.pay(id, (resp) => {
		
		res.json(resp);
	});
});

app.post('/pays', (req, res) => {

	let type = validator.trim(validator.escape(req.param('type')));
	let paystatus = validator.trim(validator.escape(req.param('paystatus')));

	payController.save(type, paystatus, (resp) => {
		
		res.json(resp);
	});
});

app.put('/pays', (req, res) => {

	let id = req.param('id');
	let type = req.param('type');
	let paystatus = req.param('paystatus')

	payController.update(id, type, paystatus, (resp) => {
		
		res.json(resp);
	});
});

app.delete('/pays/:id', (req, res) => {
	
	let id = req.param('id');

	payController.delete(id, (resp) => {
		
		res.json(resp);
	});
});

app.get('/goals', (req, res) => {
	
	goalController.list((resp) => {
		
		res.json(resp);
	});
});

app.get('/goals/:id', (req, res) => {
	
	let id = validator.trim(validator.escape(req.param('id')));

	goalController.goal(id, (resp) => {
		
		res.json(resp);
	});
});

app.post('/goals', (req, res) => {

	let goalName = validator.trim(validator.escape(req.param('goalName')));
	let goalProgress = validator.trim(validator.escape(req.param('goalProgress')));
	let goalValue = validator.trim(validator.escape(req.param('goalValue')));
    let investments = validator.trim(validator.escape(req.param('investments')));
    let investValue = validator.trim(validator.escape(req.param('investValue')));


	goalController.save(goalName, goalProgress, goalValue, investments, investValue, (resp) => {
		
		res.json(resp);
	});
});

app.put('/goals', (req, res) => {

	let id = req.param('id');
	let goalName = req.param('goalName');
	let goalProgress = req.param('goalProgress');
	let goalValue = req.param('goalValue');
    let investments = req.param('investments')
    let investValue = req.param('investValue')

	goalController.update(id, goalName, goalProgress, goalValue, investments, investValue, (resp) => {
		
		res.json(resp);
	});
});

app.delete('/goals/:id', (req, res) => {
	
	let id = req.param('id');

	goalController.delete(id, (resp) => {
		
		res.json(resp);
	});
});
