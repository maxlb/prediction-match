var match = require('./match');
var prediction = require('./prediction');

var computeAllPredMatch = async function(){
    var matchs = await match.getLastMatchs().catch(error => { throw Error(`Impossible d'obtenir les derniers matchs --> ${error.message}`) });
    var matchsWithPred = [];
    for (let i = 0 ; i < matchs.length ; i++) {
        var pred = await computePredMatchByMatchId(matchs[i].id).catch(error => { console.log(error.message) });
        matchsWithPred.push(pred);
    }
    return matchsWithPred;       
};

var computePredMatchByMatchId = async function(id){
    var mat = await match.getLastMatchById(id).catch((error) => { throw error; });
    var pred = await prediction.getPredictionByMatchId(mat.id).catch((error) => { throw Error(`Impossible de récupérer les prédictions --> Statut de la requête : ${error.statusCode}`) });

    if(pred.message){
        throw Error(`Auncune prédiction pour le match séléctionné : ${mat.id}.`);
    } else {
        var predMatch = {}
        predMatch.matchId = mat.id;
        predMatch.date = mat.date;
        predMatch.heure = mat.heure;
        predMatch.name = "Barclays Premiere League";
        predMatch.equipeDomicile = {};
        predMatch.equipeDomicile.name = mat.teamHome;
        predMatch.equipeDomicile.prob = pred.predictions.loc;
        predMatch.equipeExterieure = {};
        predMatch.equipeExterieure.name = mat.teamAway;
        predMatch.equipeExterieure.prob = pred.predictions.vis;
        return predMatch;
    }

};

exports.computeAllPredMatch = computeAllPredMatch;
exports.computePredMatchByMatchId = computePredMatchByMatchId;