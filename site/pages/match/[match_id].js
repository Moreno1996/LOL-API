import { useEffect, useState } from 'react'
import { Kayn, REGIONS } from 'kayn'
import { msToTime } from '../../methods/general_methods';
import { convertChampList, getPosition, convertTimelineList } from '../../methods/league_methods';
import MapCanvas from '../../components/mapCanvas';
import { riotAPIKey } from '../../constants/constants';


export default function Match({ match, timeline, champions }) {
  let participants = [];
  console.log("timeline", timeline);
  const champList = convertChampList(champions);
  let positionList = {};

  if (match?.participantIdentities) {
    for (const index in match?.participantIdentities) {
      const partIdent = match?.participantIdentities[index];
      const part = match?.participants[index];
      console.log("part", part);
      let partData = {};
      partData.name = partIdent.player.summonerName;
      partData.championId = part.championId;
      partData.team = part.teamId == 200 ? "Red" : "Blue";
      console.log("champ info", champList[part.championId])
      partData.champName = champList[part.championId].name;
      partData.champImage = champList[part.championId].image?.full;
      partData.position = getPosition(part?.timeline?.role, part?.timeline?.lane);

      participants[partIdent.participantId] = partData;
      positionList[partIdent.participantId] = {};
      positionList[partIdent.participantId].position = [];
    }
  }
  if (timeline?.frames) {
    for (const itemFrame of timeline.frames) {

      if (itemFrame?.participantFrames) {
        for (const item of Object.values(itemFrame.participantFrames)) {
          if (item.position && item.participantId) {
            positionList[item.participantId].position.push({
              position: item.position,
              timestamp: itemFrame.timestamp,
              time: msToTime(itemFrame.timestamp)
            });
          }
        }
      }
      //Loop over events
      if (itemFrame?.events) {
        for (const frameEvent of itemFrame.events) {
          if (frameEvent?.position) {

            if (frameEvent?.killerId) {
              positionList[frameEvent.killerId].position.push({
                position: frameEvent.position,
                timestamp: frameEvent.timestamp,
                time: msToTime(frameEvent.timestamp)

              });
            }
            if (frameEvent?.victimId) {
              positionList[frameEvent.victimId].position.push({
                position: frameEvent.position,
                timestamp: frameEvent.timestamp,
                time: msToTime(frameEvent.timestamp)
              });
            }
            if (frameEvent?.assistingParticipantIds) {
              for (const part of frameEvent?.assistingParticipantIds) {
                positionList[part].position.push({
                  position: frameEvent.position,
                  timestamp: frameEvent.timestamp,
                  time: msToTime(frameEvent.timestamp)
                });
              }
            }
          }
        }
      }
    }
  }
  for (const i of Object.keys(positionList)) {
    const list = positionList[i].position;
    const sortedList = list.sort((a, b) => {
      return a.timestamp - b.timestamp;
    })
    positionList[i].position = sortedList;
    positionList[i].user = participants[i];
  }

  console.log(positionList);
  return (
    <>
      <MapCanvas location={positionList} />

      <h4>participants</h4>
      <pre>{JSON.stringify(participants, null, 2)}</pre>

      <h4>timeline</h4>
      {timeline?.frames && timeline.frames.map((frame) => {
        const personFrames = frame.participantFrames;
        return <div>
          <div className="timestamp">
            {msToTime(frame.timestamp)}
          </div>
          <div className="personFramescontainer">
            <div className="header">
              <div className="name">Naam</div>
              <div className="champ">Champion</div>
              <div className="gold">Gold</div>
              <div className="totalgold">Total gold</div>
              <div className="level">Level</div>
              <div className="exp">XP</div>
              <div className="lane-cs">Lane cs</div>
              <div className="jungle-cs">Jungle cs</div>
              <div className="position">Position</div>
            </div>
            {personFrames && Object.values(personFrames).map((item) => {
              const position = `[${item?.position?.x} , ${item?.position?.y} ]`;

              return <>
                <div className="item">
                  <div className="name">{participants && participants[item?.participantId]?.name}</div>
                  <div className="champion">{participants && participants[item?.participantId]?.champName}</div>
                  <div className="gold">{item?.currentGold}</div>
                  <div className="totalgold">{item?.totalGold}</div>
                  <div className="level">{item?.level}</div>
                  <div className="xp">{item?.xp}</div>
                  <div className="lane-cs">{item?.minionsKilled}</div>
                  <div className="jungle-cs">{item?.jungleMinionsKilled}</div>
                  <div className="position">{position}</div>
                </div>
              </>
            })}
          </div>
        </div>

      })}
      {/* <pre>{JSON.stringify(timeline, null, 2)}</pre> */}
      <h4>match</h4>
      <pre>{JSON.stringify(match, null, 2)}</pre>
      <style jsx>
        {`
  .personFramescontainer{
    display:flex;
    flex-direction:column;
    border: 1px solid darkgreen;
  }
  .header > div, .item > div{
    flex:1;
  }
  .header, .item{
    display:flex;
    flex-direction:row;
  }
  .header{
    border-bottom: 1px solid black;
  }
  `}
      </style>
    </>
  )
}

export async function getServerSideProps({ params }) {

  const kayn = Kayn(riotAPIKey)({
    region: REGIONS.EUROPE_WEST,
    debugOptions: {
      isEnabled: true,
      showKey: false,
    },

  })
  const match_id = params.match_id;
  let match = null;
  let timeline = null;
  if (match_id) {
    match = await kayn.Match.get(match_id);
    timeline = await kayn.Match.timeline(match_id);
  }
  const champions = await kayn.DDragon.Champion.list();
  return {
    props: { match, timeline, champions }, // will be passed to the page component as props
  }
}