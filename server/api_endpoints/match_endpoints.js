import { db_find } from "../database.js";
import {
  convertMatchIdList,
  extendMatches,
  getMatch,
  getMatches,
  getMatchesByAccountID,
  getTimeline,
  storeMatches,
} from "../functions.js";
export const createMatchEndpoints = (app) => {
  app.get("/matches/byusername/:username", async (req, res) => {
    var ranked = req.query.hasOwnProperty("ranked");
    var username = req.params.username;

    const data = await getMatches(username, ranked);

    const matches = extendMatches(data.matches);
    storeMatches(matches);
    res.json(matches);
  });

  app.get("/matches/getmatch/:matchID", async (req, res) => {
    var matchID = req.params.matchID;

    const match = await getMatch(matchID);
    const timeline = await getTimeline(matchID);
    res.json({ match, timeline });
  });

  app.get("/matches/byaccountId/:accountId", async (req, res) => {
    var accountId = req.params.accountId;
    var ranked = req.query.hasOwnProperty("ranked");
    const data = await getMatchesByAccountID(accountId, ranked);
    res.json(data);
  });

  app.get("/matches/stored/", async (req, res) => {
    const start = Date.now();
    const matches = await db_find(
      "matches",
      {},
      { gameId: 1, matchType: 1, timestamp: 1, _id: 0 }
    );
    const matches_ids = convertMatchIdList(matches);
    const match_extended = await db_find(
      "match_extended",
      {},
      { gameId: 1, _id: 0 }
    );
    const match_extended_ids = convertMatchIdList(match_extended);
    const match_not_extended = matches.filter(
      (match) => !match_extended.some((e) => e.gameId == match.gameId)
    );
    const match_not_extended_ids = convertMatchIdList(match_not_extended);
    res.json({
      matches,
      match_extended,
      match_not_extended,
      matches_ids,
      match_extended_ids,
      match_not_extended_ids,
    });
  });
};
