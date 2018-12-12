
var getPredictions = function() {
    var predictions = [];
    // Appel API Alexandre

    predictions = [
        {
            "matchId": 0,
            "teamLoc": 0,
            "teamVis": 1,
            "predictions": {
                vis:[20.2, 30.2, 32.2, 9.3, 5.8, 2.3],
                loc:[20.2, 30.2, 32.2, 9.3, 5.8, 2.3]
            }
        }
    ];
    return predictions;
};

var getPredictionByMatchId = function() {
    var prediction = {};
    // Appel API Alexandre

    prediction = {
            "matchId": 0,
            "teamLoc": 0,
            "teamVis": 1,
            "predictions": {
                vis:[20.2, 30.2, 32.2, 9.3, 5.8, 2.3],
                loc:[20.2, 30.2, 32.2, 9.3, 5.8, 2.3]
            }
        };
    return prediction;
};

exports.getPredictions = getPredictions;
exports.getPredictionByMatchId = getPredictionByMatchId;