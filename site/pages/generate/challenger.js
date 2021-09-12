import { useEffect, useState } from "react";
import Select from "react-select";
import { getFromDatabase } from "../../methods/general_methods";
import { convertChampList } from "../../methods/league_methods";

export default function generate({ matches }) {
  const [champions, setChampions] = useState(null);
  const [obj, setObject] = useState({});
  const [options, setOptions] = useState(null);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    let obj = {};
    let user_object = {};
    for (const match of matches) {
      const user = match?.summonerName;
      if (!obj[user]) {
        obj[user] = new Map();
      }
      const total = obj[user];
      const champion = match.champion;
      if (!total.get(champion)) {
        total.set(champion, 0);
      }
      total.set(champion, total.get(champion) + 1);
      user_object[user] = match;
    }
    console.log("MatchData", obj);

    setObject(obj);
    setUsers(user_object);
  }, []);

  useEffect(() => {
    getFromDatabase("champions").then((champions) => {
      if (champions) {
        const array = convertChampList(champions);
        setChampions(array);
        console.log(champions);
        const options = champions
          .map((champion) => {
            if (champion?.name) {
              return { value: champion?.key, label: champion?.name };
            }
          })
          .filter((n) => n)
          .sort((a, b) =>
            a.label.toLowerCase().localeCompare(b.label.toLowerCase())
          );
        console.log(options);
        setOptions(options);
      }
    });
  }, []);
  return (
    <>
      <div className="filter">
        <Select
          options={options}
          isMulti
          onChange={(champions) => {
            console.log("onChange", champions);
            if (champions.length == 0) {
              jQuery(".user_container").show();
            } else {
              jQuery(".user_container").hide();
              for (const champion of champions) {
                console.log("show .champ_" + champion.value);
                jQuery(".champ_" + champion.value).show();
              }
            }
          }}
        />
      </div>
      <div>
        <ul>
          Collected {Object.keys(obj).length} users
          {obj &&
            Object.entries(obj).map((data, index) => {
              const user = data[0];
              let championList = data[1];
              championList = championList
                ? [...championList.entries()].sort((a, b) => b[1] - a[1])
                : [];
              const champ_ids = championList.map((item) => item[0]);
              console.log(users[user]);
              const user_object = users[user];
              return (
                <>
                  <div
                    className={`user_container ${champ_ids
                      .map((id) => "champ_" + id)
                      .join(" ")}`}
                  >
                    <div className="user_name">
                      {user}
                      <div className="lp">{user_object?.leaguePoints} LP</div>
                      <div className="lp">{user_object?.wins} wins</div>
                      <div className="lp">{user_object?.losses} losses</div>
                      <div className="lp">
                        {(
                          (user_object?.wins /
                            (user_object?.wins + user_object?.losses)) *
                          100
                        ).toFixed(2)}
                        % winrate
                      </div>
                    </div>
                    <br />
                    <div className="champions_container">
                      {championList &&
                        championList.map((item) => {
                          const champion_id = item[0];
                          const matchCount = item[1];
                          const champion =
                            (champions && champions[champion_id]) || false;

                          return (
                            champion && (
                              <>
                                <div className="champion item">
                                  <div className="image_container">
                                    <img
                                      className="champion_image"
                                      src={
                                        "/champion/tiles/" +
                                        champion?.id +
                                        "_0.jpg"
                                      }
                                      alt={champion.name}
                                    />
                                  </div>
                                  <div className="name_container">
                                    {matchCount} matches
                                  </div>
                                </div>
                              </>
                            )
                          );
                        })}
                    </div>
                  </div>
                </>
              );
            })}
        </ul>
      </div>
      <style jsx>{`
        .user_name {
          display: flex;
          gap: 1rem;
        }
        .champions_container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        .champion {
          display: flex;
        }
        :global(.champion_image) {
          width: 50px;
          height: 50px;
          margin-right: 1rem;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ params }) {
  const matches = await getFromDatabase(`challenger/generate/`);

  return {
    props: {
      matches: matches,
    }, // will be passed to the page component as props
    revalidate: 60, // In seconds
  };
}
