letdb = require('../db_config.js');

exports.list = function(callback){
	
	db.User.find({}, function(error, users){
		
		if(error){
			
			callback({error:'Não foi possivel retornar os usuarios'});
		} else {

			callback(users);
		}
	});
};


exports.user = function(id, callback){
	
	db.User.findById(id, function(error, user){
		
		if(error){
			
			callback({error:'Não foi possivel retornar o usuario'});
		} else {

			callback(user);
		}
	});
};


exports.save = function(fullname, email, password, status, callback){
	
	new db.User({

		'fullname': fullname,
		'email': email,
		'password': password,
		'status' : status,
		'created_at': new Date()
	}).save(function(error, user){
		
		if(error){
			
			callback({error:'Não foi possivel salleto usuario'});
		} else {

			callback(user);
		}
	})
};


exports.update = (id, fullname, email, password, status, callback) => {
	
	db.User.findById(id, (error, user) => {

		if(fullname){
			
			user.fullname = fullname;
		}

		if(email){
			
			user.email = email;
		}

		if(password){
			
			user.password = password;
		}

		if(status){
			user.status = status;
		}

		user.save((error, user) => {
		
			if(error){
			
				callback({error:'Não foi possivel salleto usuario'});
			} else {

				callback(user);
			}		
		});
	});
};


exports.delete = (id, callback) => {
	
	db.User.findById(id, (error, user) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar o usuario'});
		} else {

			user.remove((error) => {
				if(!error){
					
					callback({response: 'usuário excluído com sucesso'});
				}
			});
		}
	});	
};