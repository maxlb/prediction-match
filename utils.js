var match = require('./match');
var prediction = require('./prediction');

var errHandler = function(err) {
    console.log(err);
};

var computeAllPredMatch = function(){
    return new Promise(function (resolve, reject) {
        var obj = [];

        var mats = match.getLastMatchs();

        mats.forEach(mat => {
            try {
                computePredMatchByMatchId(mat.id)
                    .then(function(predMatch){
                        
                        if(!predMatch.message){
                            obj.push(predMatch);
                        } else {
                            errHandler('Pas de prediction pour le match ' + mat.id);
                        }

                    })
            } catch (error) {
                errHandler(error);
            }
        });
        
        resolve(obj);
    });
}

var computePredMatchByMatchId = function(id){
    return new Promise(function (resolve, reject) {
        var mat = match.getLastMatchById(id);

        try {
            prediction.getPredictionByMatchId(id)
                .then(function(pred){
                    
                    if(pred.message){
                        resolve(pred);
                    } else {
                        var predMatch = {}
                        predMatch.matchId = mat.id;
                        predMatch.date = mat.date;
                        predMatch.heure = mat.heure;
                        predMatch.name = mat.name;
                        predMatch.equipeDomicile = {};
                        predMatch.equipeDomicile.name = mat.equipeDomicile;
                        predMatch.equipeDomicile.prob = pred.predictions.loc;
                        predMatch.equipeExterieure = {};
                        predMatch.equipeExterieure.name = mat.equipeExterieure;
                        predMatch.equipeExterieure.prob = pred.predictions.vis;
                        resolve(predMatch);
                    }
                    
                })
        } catch (error) {
            reject(error);
        }
        
    });
}

exports.computeAllPredMatch = computeAllPredMatch;
exports.computePredMatchByMatchId = computePredMatchByMatchId;