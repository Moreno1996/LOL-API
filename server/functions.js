import express from "express";
import { Kayn, REGIONS } from "kayn";
import mongo from "mongodb";
import { database_url, riotAPIKey } from "./constants/constants.js";
import {
  db_distinct,
  db_find,
  db_find_one,
  db_update_one,
} from "./database.js";
import { getType } from "./methods/league_methods.js";
var app = express();
app.set("json spaces", 10);

var MongoClient = mongo.MongoClient;
var url = database_url;

const kayn = Kayn(riotAPIKey)({
  region: REGIONS.EUROPE_WEST,
  debugOptions: {
    isEnabled: true,
    showKey: false,
  },
});
export const getChampions = async () => {
  try {
    let champions = await kayn.DDragon.Champion.listFull();
    champions = champions?.data;
    champions = Object.values(champions);
    return champions;
  } catch (err) {
    return { error: "no_champions" };
  }
};
export const storeChampions = (champions) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("league");
    for (const champ of champions) {
      dbo
        .collection("champions")
        .updateOne({ key: champ?.key }, { $set: champ }, { upsert: true });
    }
    db.close();
  });
};
export const storeSummoner = async (summoner) => {
  await db_update_one("summoner", { accountId: summoner?.accountId }, summoner);
};

export const storeMatches = (matches) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("league");
    for (const match of matches) {
      dbo
        .collection("matches")
        .updateOne(
          { gameId: match?.gameId },
          { $set: match },
          { upsert: true }
        );
    }
    db.close();
  });
};
export const storeChallengerMatches = (matches) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("league");
    for (const match of matches) {
      dbo
        .collection("challenger_matches")
        .updateOne(
          { gameId: match?.gameId },
          { $set: match },
          { upsert: true }
        );
    }
    db.close();
  });
};
export const storeMatch = async (match) => {
  await db_update_one("match_extended", { gameId: match?.gameId }, match);
};
export const storeTimeline = async (match) => {
  await db_update_one("match_timeline", { gameId: match?.gameId }, match);
};
export const storeChallenger = async (challenger) => {
  await db_update_one(
    "challenger",
    { summonerId: challenger?.summonerId },
    challenger
  );
};
export const getChallengerBySummonerID = async (summonerId) => {
  return await db_find_one("challenger", { summonerId: summonerId }, {});
};
export const getChallengerMatches = async () => {
  return await db_find("challenger_matches", {}, {});
};

export const extendMatches = (matchlist) => {
  return (
    (matchlist || []).map((item) => ({
      ...item,
      matchType: getType(item.queue),
    })) || matchlist
  );
};
export const getSummoner = async (username) => {
  try {
    const summoner = await kayn.Summoner.by.name(username);
    storeSummoner(summoner);
    return summoner;
  } catch (error) {
    console.error("Moreno: error getSummoner", error);
  }
};
export const getChallengerSummoners = async () => {
  try {
    const challengers = await kayn.Challenger.list("RANKED_SOLO_5x5");
    return challengers.entries.sort((a, b) => b.leaguePoints - a.leaguePoints);
  } catch (error) {
    console.error("Moreno: error getChallengerSummoners", error);
  }
};
export const getMatches = async (username = "MldGet", ranked = false) => {
  try {
    const summoner = await getSummoner(username);
    const summonerId = summoner.accountId;
    let matchlist = await getMatchesByAccountID(summonerId, ranked);

    return matchlist;
  } catch (err) {
    return { error: "no_matches" };
  }
};
export const getMatchesByAccountID = async (accountId, ranked = false) => {
  try {
    let matchlist;
    if (ranked) {
      matchlist = await kayn.Matchlist.by.accountID(accountId).query({
        queue: [420],
      });
    } else {
      matchlist = await kayn.Matchlist.by.accountID(accountId);
    }
    return matchlist;
  } catch (err) {
    return { error: "no_matches" };
  }
};
export const getMatch = async (matchID) => {
  console.log("Moreno: get Match,", matchID);
  if (!matchID) {
    return "noMatchId";
  }

  const storedMatch = await db_find("match_extended", { gameId: matchID }, {});
  if (storedMatch.length > 0) {
    return storedMatch[0];
  }
  try {
    const match = await kayn.Match.get(matchID);
    storeMatch(match);
    return match;
  } catch (error) {
    console.error("Moreno: error getMatch", error);
  }
};
export const getTimeline = async (matchID) => {
  if (!matchID) {
    return "noMatchId";
  }
  const storedMatch = await db_find("match_timeline", { gameId: matchID }, {});
  if (storedMatch.length > 0) {
    return storedMatch[0];
  }
  try {
    const match = await kayn.Match.timeline(matchID);
    storeTimeline({ ...match, gameId: matchID });

    return match;
  } catch (error) {
    console.error("Moreno: error getTimeline", error);
  }
};

export const getChampionTags = async () => {
  return await db_distinct("champions", "tags");
};
export const getChampionAbilities = async () => {
  return await db_find("champions", {}, { id: 1, "spells.tooltip": 1 });
};

export const convertMatchIdList = (matches) => {
  return matches.map((item) => item?.gameId);
};
