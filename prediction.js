var rp = require('request-promise');

var getPredictionByMatchId = async function(id) {
    var url = 'https://football-predictions-228216.appspot.com/api/match/' + id + '/predictions';
    var res = await rp({ uri: url, json: true }).catch((error) => { throw error; });
    return res;
}

exports.getPredictionByMatchId = getPredictionByMatchId;