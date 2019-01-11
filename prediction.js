var request = require('request');

var errHandler = function(err) {
    console.log(err);
};

function getURL(url) {
    return new Promise(function (resolve, reject) {
        request.get(url, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    });
}

var getPredictionByMatchId = function(id) {

    // Appel API Alexandre
    return new Promise(function (resolve, reject) {
        var url_pre = 'https://football-predictions-228216.appspot.com/api/match/';
        var url_suf = '/predictions';
    
        getURL(url_pre + id + url_suf)
            .then(JSON.parse, errHandler)
            .then(function(result) { resolve(result); }, errHandler);
    });
    
};

exports.getPredictionByMatchId = getPredictionByMatchId;