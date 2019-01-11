var matchs = [
    {
        "id": 0,
        "date": "15/01/2019",
        "teamHome": "Tottenham",
        "teamAway": "Everton",
        "heure": "21:30"
    },
    {
        "id": 1,
        "date": "17/01/2019",
        "teamHome": "Chelsea",
        "teamAway": "Manchester United",
        "heure": "19:30"
    },
    {
        "id": 2,
        "date": "18/01/2019",
        "teamHome": "Burnley",
        "teamAway": "Arsenal",
        "heure": "20:00"
    },
];

var getLastMatchs = function() {
    
    return new Promise(function (resolve, reject) {
        resolve(matchs)
    });

};

var getLastMatchById = function(id) {

    return new Promise(function (resolve, reject) {
        resolve(matchs[id])
    });

};

exports.getLastMatchs = getLastMatchs;
exports.getLastMatchById = getLastMatchById;
