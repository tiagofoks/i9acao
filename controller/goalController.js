let db = require('../db_config.js');

exports.list = (callback) => {
	
	db.Goal.find({}, (error, goals) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar os Objetivos'});
		} else {

			callback(goals);
		}
	});
};


exports.goal = (id, callback) => {
	
	db.Goal.findById(id, (error, goal) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar o objetivo'});
		} else {

			callback(goal);
		}
	});
};


exports.save = (goalName, goalProgress, goalValue, investments, callback) => {
	
	new db.Goal({
        
		'goalName': goalName,
		'goalProgress': goalProgress,
		'goalValue': goalValue,
        'investments' : investments,
        'investValue' : investValue,
		'created_at': new Date()
	}).save((error, goal) => {
		
		if(error){
			
			callback({error:'Não foi possivel salvar o objetivo'});
		} else {

			callback(goal);
		}
	})
};


exports.update = (id, goalName, goalProgress, goalValue, investments, callback) => {
	
	db.Goal.findById(id, (error, goal) => {

		if(goalName){
			
			goal.goalName = goalName;
		}

		if(goalProgress){
			
			goal.goalProgress = goalProgress;
		}

		if(goalValue){
			
			goal.goalValue = goalValue;
		}

		if(investments){
			goal.investments = investments;
        }
        
        if(investValue){
            goal.investValue = investValue;
        }

		goal.save((error, goal) => {
		
			if(error){
			
				callback({error:'Não foi possivel salvar o objetivo'});
			} else {

				callback(goal);
			}		
		});
	});
};


exports.delete = (id, callback) => {
	
	db.Goal.findById(id, (error, goal) => {
		
		if(error){
			
			callback({error:'Não foi possivel retornar o objetivo'});
		} else {

			goal.remove((error) => {
				if(!error){
					
					callback({response: 'objetivo excluído com sucesso'});
				}
			});
		}
	});	
};


