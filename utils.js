var match = require('./match');
var prediction = require('./prediction');


var computeAllPredMatch = function(){
    var obj = [];
    
    match.getLastMatchs().forEach(mat => {
        var pred = prediction.getPredictionByMatchId(mat.id);

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
        
        obj.push(predMatch);
    });

    return obj;
}

var computePredMatchByMatchId = function(id){

    var mat = match.getLastMatchById(id);
    var pred = prediction.getPredictionByMatchId(id);

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

    return predMatch;
}

exports.computeAllPredMatch = computeAllPredMatch;
exports.computePredMatchByMatchId = computePredMatchByMatchId;