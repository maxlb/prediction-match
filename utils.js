var match = require('./match');
var prediction = require('./prediction');

var errHandler = function(err) {
    console.log(err);
};

var computeAllPredMatch = function(){
    return new Promise(function (resolve, reject) {
        var obj = [];

        try {
            match.getLastMatchs()
                .then(function(matchs){

                    matchs.forEach(mat => {
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

                })
        } catch (error) {
            errHandler(error);
        }

        resolve(obj);
    });
}

var computePredMatchByMatchId = function(id){
    return new Promise(function (resolve, reject) {

        try {
            match.getLastMatchById(id)
                .then(function(match){

                    try {
                        prediction.getPredictionByMatchId(match.id)
                            .then(function(pred){
                                
                                if(pred.message){
                                    resolve(pred);
                                } else {
                                    var date = new Date(match.date);
                                    var predMatch = {}
                                    predMatch.matchId = match.id;
                                    predMatch.date = match.date;
                                    predMatch.heure = match.heure;
                                    predMatch.name = "Barclays Premiere League";
                                    predMatch.equipeDomicile = {};
                                    predMatch.equipeDomicile.name = match.teamHome;
                                    predMatch.equipeDomicile.prob = pred.predictions.loc;
                                    predMatch.equipeExterieure = {};
                                    predMatch.equipeExterieure.name = match.teamAway;
                                    predMatch.equipeExterieure.prob = pred.predictions.vis;
                                    resolve(predMatch);
                                }
                                
                            })
                    } catch (error) {
                        reject(error);
                    }

                })
        } catch (error) {
            errHandler(error);
        }

    });
}

exports.computeAllPredMatch = computeAllPredMatch;
exports.computePredMatchByMatchId = computePredMatchByMatchId;