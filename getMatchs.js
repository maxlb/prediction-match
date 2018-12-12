
var getLastMatchs = function() {
    var matchs = {};
    // Appel API Pierre

    matchs = [
        {
            "id": 1,
            "date": "15/10/2018",
            "equipeDomicile": {
                "name": "Tottenham",
                "prob": [19.73, 32.02, 25.99, 14.06, 5.07, 1.85]
            },
            "equipeExterieure": {
                "name": "Everton",
                "prob": [43.86, 36.14, 14.89, 4.09, 0.84, 0.14]
            },
            "heure": "21:30",
            "name": "Barclay Première Ligue"
        },
        {
            "id": 2,
            "date": "15/10/2018",
            "equipeDomicile": {
                "name": "Tottenham",
                "prob": [19.73, 32.02, 25.99, 14.06, 5.07, 1.85]
            },
            "equipeExterieure": {
                "name": "Everton",
                "prob": [43.86, 36.14, 14.89, 4.09, 0.84, 0.14]
            },
            "heure": "21:30",
            "name": "Barclay Première Ligue"
        }
    ];
    return matchs;
};

exports.getLastMatchs = getLastMatchs;