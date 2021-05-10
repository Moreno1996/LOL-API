import { msToDate, msToTime } from "./general_methods";

export const convertChampList = (champions) => {
    const champData = champions.data;
    let array = []
    for (const name in champData) {
        const champ = champData[name];
        const id = champ.key;
        array[id] = champ;
    }
    return array;
}

export const getPosition = (role, lane) => {
    console.log("getPosition", role, lane)
    if (role == "DUO_SUPPORT") {
        return "Support";
    };
    if (role == "DUO_CARRY") {
        return "ADC";
    }
    switch (lane) {
        case "MID":
            return "Mid";
        case "MIDDLE":
            return "Mid";
        case "TOP":
            return "Top";
        case "JUNGLE":
            return "JUNGLE "
        case "BOTTOM":
            if (role == "DUO_SUPPORT") {
                return "Support";
            }
            else if (role = "DUO_CARRY") {
                return "Bottom"
            }
            return "Bottom-lane";
        case "NONE":
            return "Support";
        default: return "Unknown";

    }
}
export const getType = (type) => {

    switch (type) {
        case 400:
            return "Draft Pick";
        case 420:
            return "Ranked solo";
        case 430:
            return "Blind Pick";
        case 440:
            return "Ranked flex";
        case 450:
            return "ARAM";
        case 700:
            return "Clash games";
        case 830:
            return "Co-op vs. AI Intro Bot";
        case 840:
            return "Co-op vs. AI Beginner Bot";
        case 850:
            return "Co-op vs. AI Intermediate Bot";
        case 900:
            return "URF";
        case 1300:
            return "Nexus Blitz";



        default: return "Unknown";

    }
}

export const convertTimelineList = (list) => {
    const interval = 3;//seconds
    const msInterval = interval * 1000;
    let result = []
    for (const i in list) {
        const index = parseInt(i);
        if (index != list.length - 1) {
            const currentItem = list[index];
            const nextItem = list[index + 1];
            const startTime = parseInt(currentItem.timestamp);
            const endTime = parseInt(nextItem.timestamp);
            const iterations = Math.floor((endTime - startTime) / msInterval);
            const difX = parseInt(nextItem.position.x) - parseInt(currentItem.position.x);
            const difY = parseInt(nextItem.position.y) - parseInt(currentItem.position.y);
            for (let a = 0; a < iterations; a++) {
                const timestamp = Math.floor((startTime / msInterval)) * msInterval + a * msInterval;
                const position = {
                    x: parseInt(currentItem.position.x) + (difX / iterations * a),
                    y: parseInt(currentItem.position.y) + (difY / iterations * a),
                }
                const time = msToTime(timestamp);

                if (timestamp % msInterval == 0) {
                    result.push({
                        timestamp, position, time
                    }
                    )
                }
            }

        }

    }
    return result;
}