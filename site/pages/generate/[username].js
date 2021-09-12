import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getFromDatabase,
  msToDateTime,
  msToTime,
} from "../../methods/general_methods";

export default function Generate() {
  const [matches, setMatches] = useState({});

  const router = useRouter();
  const getUser = () => {};
  const getUserMatches = () => {};
  const getMatchUsers = () => {};
  useEffect(() => {
    console.log(router.query);
    if (router.query.hasOwnProperty("username")) {
      const username = router.query.username;
      console.log("get from database with", username);
      getFromDatabase(`matches/byusername/${username}?ranked`).then((data) => {
        const existingMatches = matches;
        for (const match of data) {
          existingMatches[match.gameId] = match;
        }
        setMatches(existingMatches);
        console.log(existingMatches);
      });
    }
  }, []);
  return (
    <>
      <div>
        <ul>
          {Object.values(matches).map((item, index) => {
            return (
              <li>
                Game: {item?.gameId} op {msToDateTime(item?.timestamp)}
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
