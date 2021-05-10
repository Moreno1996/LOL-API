import { useEffect, useState } from 'react'
import { Kayn, REGIONS } from 'kayn'
import { msToDateTime } from '../../methods/general_methods';
import { convertChampList, getPosition, getType } from '../../methods/league_methods';
import { riotAPIKey } from "../../constants/constants"


export default function Home({ user, accountID, matches, firstMatch, firsttimeline, champions }) {
  const [init, setInit] = useState(false);
  const [data, setData] = useState(null);
  const [champArray, setChamparray] = useState(null);
  useEffect(() => {
    if (!init) {
      setInit(true);
      if (champions) {
        const array = convertChampList(champions)
        setChamparray(array)
      }
    }
  });

  return (
    <>

      <h4>user:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h4>firstMatch:</h4>
      {/* <pre>{JSON.stringify(firstMatch,null, 2)}</pre>
    <h4>firsttimeline:</h4>
    <pre>{JSON.stringify(firsttimeline,null, 2)}</pre>
    // <h4>matches</h4> */}
      <div className="matchTable">
        <div className="headerContainer">
          <div className="date header">
            Datum:
            </div>
          <div className="champion header">
            Champion:
        </div>
          <div className="position header">
            Positie:
        </div>
          <div className="matchType header">
            Soort:
        </div>
        </div>
        {matches?.matches && matches?.matches.map((match, index) => {
          console.log("match", match);
          const time = msToDateTime(match?.timestamp)

          return (<>
            <div className="itemContainer" onClick={() => {
              window.location.href = '/match/' + match.gameId;

            }}>
              <div className="date item">
                {time}
              </div>
              <div className="champion item">
                {champArray && champArray[match?.champion].name}
                <span>
                  {champArray && champArray[match?.champion].title}

                </span>
              </div>

              <div className="position item">
                {getPosition(match.role, match.lane)} ( {match.role}, {match.lane})
              </div>
              <div className="matchType item">
                {getType(match.queue)}
              </div>
            </div>
          </>
          )

        })}

      </div>

      <pre>{JSON.stringify(matches, null, 2)}</pre>
      <h4>accountID</h4>
      <pre>{JSON.stringify(accountID, null, 2)}</pre>

      <style jsx>{`
      .champion{
          display:flex;
          flex-direction:column;
      }
      .champion span{
        font-size: .8em;
        color: grey;
      }
      .matchTable{
        display:flex;
        flex-direction:column;
      }

      .matchTable .item, .matchTable .header{
        flex:1;
        display:flex;
      }
      .matchTable .itemContainer{
        border-top: 1px solid black;
        cursor:pointer;
      }
      .matchTable .headerContainer{
        background:grey;
        background: #b7abab;
      }
      .matchTable .headerContainer, .matchTable .itemContainer{
        display:flex;
        flex-direction:row;
        padding: 0.5rem 1rem;

      }
`}</style>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const username = params.username;

  let myError = false;
  const kayn = Kayn(riotAPIKey)({
    region: REGIONS.EUROPE_WEST,
    debugOptions: {
      isEnabled: true,
      showKey: false,
    },

  })
  const summoner = await kayn.Summoner.by.name(username);
  const summonerId = summoner.accountId;
  const matchlist = await kayn.Matchlist.by.accountID(summonerId)
    .region(REGIONS.EUROPE_WEST)
    .query({
      // season: 9,
      // queue: [420, 440],
    })
  let firstMatch = null;
  let firsttimeline = null;
  if (matchlist?.matches) {
    firstMatch = await kayn.Match.get(matchlist.matches[0].gameId);
    firsttimeline = await kayn.Match.timeline(matchlist.matches[0].gameId);
  }
  const champions = await kayn.DDragon.Champion.list();
  return {
    props: { user: summoner, accountID: summonerId, matches: matchlist, firstMatch, firsttimeline, champions }, // will be passed to the page component as props
  }
}