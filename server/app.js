import express from 'express'
import mongo from 'mongodb'
import { Kayn, REGIONS } from 'kayn'
import { convertChampList, getType } from "./methods/league_methods.js"
var app = express();
var port = 3003;
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";
var riotAPIKey = "RGAPI-df595ac6-db9d-4785-b22c-28d5a9a02ee8";
const kayn = Kayn(riotAPIKey)({
    region: REGIONS.EUROPE_WEST,
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },

})
const getChampions = async () => {
    let champions = await kayn.DDragon.Champion.list();
    champions = champions?.data;
    champions = Object.values(champions)

    return champions;
}
const storeChampions = (champions) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("league");
        for (const champ of champions) {
            dbo.collection("champions").updateOne({ key: champ?.key }, { $set: champ }, { upsert: true });
        }
        db.close();

    });
}
const storeSummoner = (summoner) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("league");
        dbo.collection("summoner").updateOne({ accountId: summoner?.accountId }, { $set: summoner }, { upsert: true });
        // dbo.collection("summoner").insertOne(summoner);

        db.close();

    });
}

const storeMatches = (matches) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("league");
        for (const match of matches) {
            dbo.collection("matches").updateOne({ gameId: match?.gameId }, { $set: match }, { upsert: true });
        }
        db.close();
    });
}
const storeMatch = (match) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("league");
        var myobj = match;
        dbo.collection("matches").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/update/champions", async (req, res) => {
    const champions = await getChampions();
    res.send("<pre>" + JSON.stringify(champions, null, 2) + "</pre>");
    storeChampions(champions);
});
app.get("/matches", async (req, res) => {
    const data = await getMatches(req?.query?.user);

    const matches = extendMatches(data.matches);
    storeMatches(matches)
    res.send("<pre>" + JSON.stringify(matches, null, 2) + "</pre>");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

app.get("/addname", (req, res1) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("league");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("matches").insertOne(myobj, function (err, res) {
            if (err) throw err;
            res1.send("1 document inserted" + JSON.stringify(myobj));

            console.log("1 document inserted");
            db.close();
        });
    });
});


const extendMatches = (matchlist) => {
    return (matchlist || []).map((item) => ({ ...item, "matchType": getType(item.queue) })) || matchlist

}
const getMatches = async (username = "MldGet") => {
    console.log("getMatches ", username)
    const summoner = await kayn.Summoner.by.name(username);
    storeSummoner(summoner);
    const summonerId = summoner.accountId;
    let matchlist = await kayn.Matchlist.by.accountID(summonerId).query({
        queue: [420],
    })
    return matchlist
}