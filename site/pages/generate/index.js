import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getFromDatabase,
  msToDateTime,
  msToTime,
} from "../../methods/general_methods";

export default function generate() {
  const [matches, setMatches] = useState(null);
  const getMatches = () => {
    return matches;
  };
  const router = useRouter();
  const getMatch = (matchData = null) => {
    if (!matches && !matchData) {
      console.warn("matches not set");
      return;
    }
    let matches = matches;
    if (!matches) {
      matches = matchData;
    }
    const newMatchIndex = matches.findIndex((item) => !item?.done);

    getFromDatabase(`matches/getmatch/${matches[newMatchIndex]?.gameId}`).then(
      (data) => {
        matches[newMatchIndex].done = true;
        console.log(matches[newMatchIndex]);
        console.log(matches);
        setMatches(matches);
        console.log("newMatch data", data);
      }
    );
  };
  useEffect(() => {
    getFromDatabase(`matches/stored/`).then((data) => {
      console.log("data", data);
      const matchData = data?.match_not_extended;
      console.log("match_not_extended", matchData);
      setMatches(matchData);
      getMatch(matchData);
    });
  }, []);
  return (
    <>
      <div>
        <ul>
          {matches &&
            Object.values(matches).map((item, index) => {
              const finished = item?.done;
              if (finished) {
                console.log(item);
              }
              return (
                <li key={index}>
                  Game: {item?.gameId} op {msToDateTime(item?.timestamp)}
                  {finished && <>DONE</>} A {finished ? "Done" : "Not done"}
                </li>
              );
            })}
        </ul>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
