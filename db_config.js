const db_string = 'mongodb://127.0.0.1/i9acao';

const mongoose = require('mongoose').connect(db_string);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'))

db.once ('open', () => {
	
	const userSchema = mongoose.Schema({
		
		fullname: String,
		email: String,
		password: String,
		status: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);
});