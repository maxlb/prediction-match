// Dépendances  
var express = require('express'); 
var utils = require('./utils');

// Initialisation
var app = express();  
var myRouter = express.Router(); 
 
// Router
myRouter.route('/').get(function(req,res){ 
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
	var obj = utils.computeAllPredMatch();
	res.json(obj);
});

myRouter.route('/prediction/:id').get(function(req,res){ 
	var obj = utils.computePredMatchByMatchId(req.params.id);
	res.json(obj);
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