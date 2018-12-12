// Dépendances  
var express = require('express'); 
var getMatchs = require('./getMatchs');

// Initialisation
var app = express();  
var myRouter = express.Router(); 
 
// Router
myRouter.route('/').get(function(req,res){ 
	res.send('Hello World!');
});

myRouter.route('/prediction').get(function(req,res){ 
	var obj = getMatchs.getLastMatchs();
	res.json(obj);
});

myRouter.route('/prediction/:pred_id').get(function(req,res){ 
	res.json({message : "Vous souhaitez accéder aux informations de la prediction n°" + req.params.pred_id});
});

app.use(myRouter); 


// Lancement
const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Mon serveur fonctionne sur http://${host}:${port}`);
});