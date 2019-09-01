exports.paylist = (callback) => {
	
	db.Pay.find({}, (error, pays) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar as formas de pagamento'});
		} else {

			callback(pays);
		}
	});
};


exports.pay = (id, callback) => {
	
	db.Pay.findById(id, (error, pay) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar a forma de pagamento'});
		} else {

			callback(pay);
		}
	});
};


exports.save = (type, paystatus, callback) => {
	
	new db.Pay({

		'type': type,
		'paystatus' : paystatus,
		'created_at': new Date()
	}).save((error, pay) => {
		
		if(error){
			
			callback({error:'Não foi possivel salvar a forma de pagamento'});
		} else {

			callback(pay);
		}
	})
};


exports.update = (type, paystatus, callback) => {
	
	db.Pay.findById(id, (error, pay) => {

		if(type){
			
			pay.type = type;
		}

        if(paystatus){
			pay.paystatus = paystatus;
		}

		pay.save((error, pay) => {
		
			if(error){
			
				callback({error:'Não foi possivel salvar a forma de pagamento'});
			} else {

				callback(pay);
			}		
		});
	});
};


exports.delete = (id, callback) => {
	
	db.Pay.findById(id, (error, pay) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar a forma de pagamento'});
		} else {

			pay.remove((error) => {
				if(!error){
					
					callback({response: 'forma de pagamento excluída com sucesso'});
				}
			});
		}
	});	
};