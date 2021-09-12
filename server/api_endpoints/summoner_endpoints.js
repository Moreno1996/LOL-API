import { db_find } from "../database.js";
import { getSummoner } from "../functions.js";

export const createSummonerEndpoints = (app) => {
  app.get("/summoner/:summonerName", async (req, res) => {
    var summonerName = req.params.summonerName;
    const data = await getSummoner(summonerName);
    res.json(data);
  });
  app.get("/summoner/stored", async (req, res) => {
    const start = Date.now();
    const matches = await db_find("summoner", {}, { name: 1 });
    res.json(matches);
  });
};
