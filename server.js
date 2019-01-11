// Dépendances  
var express = require('express'); 
var utils = require('./utils');

// Initialisation
var app = express();  
var myRouter = express.Router(); 
 
// Router
myRouter.route('/').get(function(req,res){ 
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
	
	var html = " 																				\
	<style type=\"text/css\">																	\
		body{ font-family: sans-serif; }														\
		b{ font-family: monospace; font-size: large; color: white; background-color: gray; }	\
	</style>																					\
	<h1>API de prévision des scores des prochains matchs</h1> 									\
	<ul> 																						\
		<li><b>/prediction</b> pour obtenir toutes les prévisions calculées </li> 				\
		<li><b>/prediction/9</b> pour obtenir les prévisions du match d'id 9 </li> 				\
	</ul> 																						\
	"
	res.send(html);
});

myRouter.route('/prediction').get(function(req,res){ 
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
	
	try {
		utils.computeAllPredMatch()
			.then(function(obj){
				res.json(obj);
			});
	} catch(err){
		res.json(err);
	}
	
});

myRouter.route('/prediction/:id').get(function(req,res){ 
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

	try {
		utils.computePredMatchByMatchId(req.params.id)
			.then(function(obj){
				res.json(obj);
			});
	} catch(err){
		res.json(err);
	}
});

app.use(myRouter); 


// Lancement
const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  
  var lhost = host;
  if(lhost == '::'){
	lhost = 'localhost';
  }

  console.log(`Mon serveur fonctionne sur http://${lhost}:${port}`);
});