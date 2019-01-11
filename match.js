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
        "teamAway": "Liverpool",
        "heure": "19:30"
    },
    {
        "id": 2,
        "date": "18/01/2019",
        "teamHome": "Burnley",
        "teamAway": "Arsenal",
        "heure": "20:00"
    }
];

var getLastMatchs = async function() {
    return matchs;
};

var getLastMatchById = async function(id) {
    if(id < matchs.length) {
        return matchs[id];
    } else {
        throw TypeError(`Le match séléctionné n'existe pas : ${id}.`);
    }
};

exports.getLastMatchs = getLastMatchs;
exports.getLastMatchById = getLastMatchById;
