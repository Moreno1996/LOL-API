import { useEffect, useState } from "react"
import { Kayn, REGIONS } from 'kayn'
import { riotAPIKey } from "../constants/constants";
import dynamic from 'next/dynamic'

const ReactJson = dynamic(() => import('react-json-view'), { srr: false, loading: () => <p>Loading..</p> });

const testApi = ({ result }) => {
    const refreshWithMethod = (query) => {
        console.log("refresh with query", query)
        window.location.href = window.location.protocol + "//" + window.location.host + window.location.pathname + '?method=' + query;

    }
    return <>

        <button className="user_data" onClick={() => {

            refreshWithMethod("user");

        }}>Get user data </button>
        <button className="user_data" onClick={() => {

            refreshWithMethod("matchlist");

        }}>Get Match list</button>
        <button className="user_data" onClick={() => {

            refreshWithMethod("match");

        }}>Get Single match</button>
        <button className="user_data" onClick={() => {

            refreshWithMethod("timeline");

        }}>Get Single match Timeline</button>

        {result && typeof window !== 'undefined' && <ReactJson src={result} />
        }

    </>
}

const getUserData = async (api) => {
    if (api) {
        return await api.Summoner.by.name("MlDget");
    }
}
const getMatchList = async (api) => {
    if (api) {
        return await api.Matchlist.by.accountID("n2vnLxcc2x-DMoIhdm0WMuraVVCFFEW_MpkD2D5-uEXLHfs")
    }
}
const getMatch = async (api) => {
    if (api) {
        return await api.Match.get("5201808238");
    }
}
const getTimeline = async (api) => {
    if (api) {
        return await api.Match.timeline("5201808238");
    }
}
export async function getServerSideProps({ query }) {
    const method = query.method;
    let result = null;
    const kayn = Kayn(riotAPIKey)({
        region: REGIONS.EUROPE_WEST,
        debugOptions: {
            isEnabled: true,
            showKey: false,
        },

    })
    if (method) {
        switch (method) {
            case "user":
                result = await getUserData(kayn);
                break;
            case "matchlist":
                result = await getMatchList(kayn);
                break;
            case "match":
                result = await getMatch(kayn);
                break;
            case "timeline":
                result = await getTimeline(kayn);
                break;
            default:
                break;
        }
    }
    return {
        props: { "result": result || null, "method": method || null }, // will be passed to the page component as props
    }
}

export default testApi;