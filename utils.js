var match = require('./match');
var prediction = require('./prediction');

var errHandler = function(err) {
    console.log(err);
};

async function getMatchsWithPred(matchs){
    var obj = [];
    for (let i = 0 ; i < matchs.length ; i++) {
        try {
            var pred = await computePredMatchByMatchId(matchs[i].id);
            if(!pred.message){
                obj.push(pred);
            } else {
                errHandler('Pas de prediction pour le match ' + matchs[i].id);
            }
        } catch (error) {
            errHandler(error);
        }
    }
    return obj;
}

var computeAllPredMatch = async function(){
    try {
        var matchs = await match.getLastMatchs();
        var matchsWithPred = await getMatchsWithPred(matchs);
        return matchsWithPred;
    } catch (error) {
        errHandler(error);
        return [];
    }
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