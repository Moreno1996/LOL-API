import {
  getChallengerBySummonerID,
  getChallengerMatches,
  getChallengerSummoners,
  getMatches,
  storeChallenger,
  storeChallengerMatches,
} from "../functions.js";
import { isToday } from "../methods/general_methods.js";

export const createChallengerEndpoints = (app) => {
  const max_generation_time = 1 * 1000; // 5 seconds

  app.get("/challenger/list", async (req, res) => {
    const challengers = await getChallengerSummoners();
    res.json(challengers);
  });

  app.get("/challenger/getChallengerBySummonerID", async (req, res) => {
    var summonerId = req.params.summonerId;
    res.json(getChallengerBySummonerID(summonerId));
  });

  app.get("/challenger/generate", async (req, res) => {
    const users = await getChallengerSummoners();
    const start = Date.now();

    for (let i = 0; i < Math.min(users.length, 100); i++) {
      if (Date.now() - max_generation_time > start) {
        console.log(
          "Stop because time " + (Date.now() - start) / 1000 + "s has elapsed"
        );
        break;
      }
      const user = users[i];
      const existingUser = await getChallengerBySummonerID(user?.summonerId);
      if (existingUser) {
        if (isToday(existingUser.latest_update)) {
          console.log("skip user", user.summonerName);
          continue;
        }
      }
      user.latest_update = Date.now();
      await storeChallenger(user);
      let matches = await getMatches(user.summonerName, true);
      if (matches?.matches) {
        matches = matches.matches.map((item) => {
          return { ...item, ...user };
        });
        console.log("store matches for user", user.summonerName);

        await storeChallengerMatches(matches);
      }
    }
    const allMatches = await getChallengerMatches();
    console.log("return all matches");
    res.json(allMatches);
  });
};
