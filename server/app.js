import cors from "cors";
import express from "express";
import { createChallengerEndpoints } from "./api_endpoints/challenger_endpoints.js";
import { createChampionEndpoints } from "./api_endpoints/champion_endpoints.js";
import { createMatchEndpoints } from "./api_endpoints/match_endpoints.js";
import { createSummonerEndpoints } from "./api_endpoints/summoner_endpoints.js";
import { getTimeline } from "./functions.js";
var app = express();

app.use(cors());
app.set("json spaces", 10);

var port = 3003;

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
createChampionEndpoints(app);
createChallengerEndpoints(app);
createSummonerEndpoints(app);
createMatchEndpoints(app);

app.get("/timeline/:matchID", async (req, res) => {
  var matchID = req.params.matchID;

  const data = await getTimeline(matchID);
  res.json(data);
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
