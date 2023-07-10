////////////////////////////////////////
// add subsection to existing tune:   //
////////////////////////////////////////
let obj = {
    name: "תודה",
    composer: "י. קויומציס",
    performer: "עוזי חיטמן",
    performance: {
        videoId: "bao1RglEzM8",
        startAt: null,
        label: "תודה - עוזי חיטמן",
    },
    subsections: { id: 270, name: "יברך את בית ישראל", rate: 5 },
};

let [tId, subRate] = [4290, 5];
let sub = obj.subsections;

let subId = sub.id;
let subName = sub.name;
db.tunes.updateOne(
    { id: tId },
    { $push: { subsections: { id: subId, name: subName, rate: subRate } } }
);

////////////////////////////////////////
// add new tune:   //
////////////////////////////////////////

let tune = {
    name: "אחת שאלתי",
    composer: "עממי",
    performer: "נפתלי קמפה",
    performance: {
        videoId: "mnDKmG3JiwQ",
        startAt: 7,
        label: "אחת שאלתי - נפתלי קמפה",
    },
    subsections: [{ id: 250, name: "בצאת ישראל", rate: 4 }]
};
tune.id = Math.floor(Math.random() * 10000);
tune.subsections = [tune.subsections];
db.tunes.insertOne(tune);
