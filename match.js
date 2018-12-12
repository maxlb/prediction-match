
var getLastMatchs = function() {
    var matchs = [];
    // Appel API Pierre

    matchs = [
        {
            "id": 1,
            "date": "15/10/2018",
            "equipeDomicile": "Tottenham",
            "equipeExterieure": "Everton",
            "heure": "21:30",
            "name": "Barclay Première Ligue"
        },
        {
            "id": 2,
            "date": "15/10/2018",
            "equipeDomicile": "Tottenham",
            "equipeExterieure":"Everton",
            "heure": "21:30",
            "name": "Barclay Première Ligue"
        }
    ];
    return matchs;
};

var getLastMatchById = function() {
    var match = {};
    // Appel API Pierre

    match = {
            "id": 2,
            "date": "15/10/2018",
            "equipeDomicile": "Tottenham",
            "equipeExterieure": "Everton",
            "heure": "21:30",
            "name": "Barclay Première Ligue"
        };

    return match;
};

exports.getLastMatchs = getLastMatchs;
exports.getLastMatchById = getLastMatchById;
