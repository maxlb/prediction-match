//L'application requiert l'utilisation du module Express.  
var express = require('express'); 
var getMatchs = require('./getMatchs');

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 8080; 
 
var app = express();  
var myRouter = express.Router(); 
 
 
myRouter.route('/prediction').get(function(req,res){ 
      var obj = getMatchs.getLastMatchs();
	  res.json(obj);
});

myRouter.route('/prediction/:pred_id').get(function(req,res){ 
	  res.json({message : "Vous souhaitez accéder aux informations de la prediction n°" + req.params.pred_id});
});


app.use(myRouter); 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port + "\n"); 
});