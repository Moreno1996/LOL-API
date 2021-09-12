import { db_update_one } from "./../database.js";
import {
  getChampionAbilities,
  getChampions,
  getChampionTags,
} from "./../functions.js";

export const createChampionEndpoints = (app) => {
  app.get("/champions", async (req, res) => {
    const champions = await getChampions();
    res.json(champions);
    // storeChampions(champions);
  });
  app.get("/champions/tags", async (req, res) => {
    const data = await getChampionTags();
    res.json(data);
  });

  app.get("/champions/abilities", async (req, res) => {
    const data = await getChampionAbilities();
    const tags = new Set();
    for (const champ of data) {
      const spells = champ["spells"];
      const statusTags = new Set();
      for (const spell of spells) {
        const tooltip = spell.tooltip;
        var spelltags = (tooltip.match(/\<\/.*?\>/g) || []).map(function (val) {
          return val.substring(2, val.length - 1);
        });
        spelltags.forEach((item) => tags.add(item));
        if (tooltip.includes("<status>")) {
          var result = tooltip
            .match(/<status>(.*?)<\/status>/g)
            .map(function (val) {
              return val.replace(/<\/?status>/g, "");
            });
          result.forEach((item) => statusTags.add(item));
        }
        spell.tags = tags;
      }
      champ.statusTags = [...statusTags];
      await db_update_one(
        "champions",
        { id: champ.id },
        { statusTags: [...statusTags] }
      );
    }
    res.json({ allTags: [...tags], data: data });
  });
};
