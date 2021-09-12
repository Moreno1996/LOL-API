import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { getFromDatabase, msToDateTime } from "../../methods/general_methods";
import {
  convertChampList,
  getPosition,
  getType,
} from "../../methods/league_methods";

export default function Home({ user, accountID }) {
  const [init, setInit] = useState(false);
  const [data, setData] = useState(null);
  const [matches, setMatchlist] = useState(null);
  const [champions, setChampions] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log(router);
    let url = "matches/byaccountId/" + accountID;
    console.log(router);
    if (router.query.hasOwnProperty("ranked")) {
      url += "?ranked";
    }
    getFromDatabase(url).then((matchlist) => {
      console.log(matchlist);
      setMatchlist(matchlist);
    });
    getFromDatabase("champions").then((champions) => {
      if (champions) {
        const array = convertChampList(champions);
        console.log("champ_array", array);
        setChampions(array);

        // setChamparray(array)
      }
    });
  }, []);
  const champion_match_count = matches?.matches.reduce((total, match) => {
    const champion = match.champion;
    console.log(champion, total);
    if (!total.get(champion)) {
      total.set(champion, 0);
    }
    total.set(champion, total.get(champion) + 1);
    return total;
  }, new Map());
  const champion_match_count_sorted = champion_match_count
    ? [...champion_match_count.entries()].sort((a, b) => b[1] - a[1])
    : [];

  return (
    <>
      {user && (
        <div className="user_container">
          <div className="user_image">
            <img
              src={
                "http://ddragon.leagueoflegends.com/cdn/11.10.1/img/profileicon/" +
                user?.profileIconId +
                ".png"
              }
              className="profile_icon"
            />
          </div>
          <div className="user_title">
            <h2>{user.name}</h2>
            <h4>Level {user?.summonerLevel}</h4>
          </div>
        </div>
      )}
      {champion_match_count_sorted &&
        champion_match_count_sorted.map((item) => {
          console.log(item);
          const champion_id = item[0];
          const matchCount = item[1];
          const champion = (champions && champions[champion_id]) || false;

          return (
            champion && (
              <>
                <div className="champion item">
                  <div className="image_container">
                    <img
                      className="champion_image"
                      src={"/champion/tiles/" + champion?.id + "_0.jpg"}
                      alt={champion.name}
                    />
                  </div>
                  <div className="name_container">{matchCount} matches</div>
                </div>
              </>
            )
          );
        })}
      <div className="matchTable">
        <div className="headerContainer">
          <div className="date header">Datum:</div>
          <div className="champion header">Champion:</div>
          <div className="position header">Positie:</div>
          <div className="matchType header">Soort:</div>
        </div>
        {matches?.error && (
          <>
            {
              (matches.error = "no_matches" ? (
                <>Er zijn helaas geen wedstrijden </>
              ) : (
                <>Er is iets fout gegaan: ${matches.error}</>
              ))
            }
          </>
        )}
        {matches?.matches &&
          matches?.matches.map((match, index) => {
            const time = msToDateTime(match?.timestamp);
            const champion = (champions && champions[match?.champion]) || false;
            return (
              <>
                <div
                  key={index}
                  className="itemContainer"
                  onClick={() => {
                    window.location.href = "/match/" + match.gameId;
                  }}
                >
                  <div className="date item">{time}</div>
                  <div className="champion item">
                    {champion && (
                      <>
                        <div className="image_container">
                          <img
                            className="champion_image"
                            src={"/champion/tiles/" + champion?.id + "_0.jpg"}
                            alt={champion.name}
                          />
                        </div>
                        <div className="name_container">
                          {champion.name}
                          <span>{champion.title}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="position item">
                    {getPosition(match.role, match.lane)} ( {match.role},{" "}
                    {match.lane})
                  </div>
                  <div className="matchType item">
                    {getType(match.queue)} - {match.gameId}
                  </div>
                </div>
              </>
            );
          })}
      </div>

      <style jsx>{`
        .profile_icon {
          width: 100px;
          height: 100px;
        }
        :global(.champion_image) {
          width: 50px;
          height: 50px;
          margin-right: 1rem;
        }
        .user_container {
          display: flex;
          flex-direction: row;
          margin: 3rem 1rem;
        }
        .user_title {
          display: flex;
          flex-direction: column;
          margin-left: 1rem;
        }
        .champion {
          display: flex;
          flex-direction: row;
        }
        .name_container {
          display: flex;
          flex-direction: column;
        }
        .champion span {
          font-size: 0.8em;
          color: grey;
        }
        .matchTable {
          display: flex;
          flex-direction: column;
        }

        .matchTable .item,
        .matchTable .header {
          flex: 1;
          display: flex;
        }
        .matchTable .itemContainer {
          border-top: 1px solid black;
          cursor: pointer;
        }
        .matchTable .headerContainer {
          background: grey;
          background: #b7abab;
        }
        .matchTable .headerContainer,
        .matchTable .itemContainer {
          display: flex;
          flex-direction: row;
          padding: 0.5rem 1rem;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const username = params.username;

  const summoner = await getFromDatabase("summoner/" + username);
  const summonerId = summoner.accountId;
  // const champions = await getFromDatabase("champions");
  return {
    props: {
      user: summoner,
      accountID: summonerId,
      // champions,
    }, // will be passed to the page component as props
  };
}
