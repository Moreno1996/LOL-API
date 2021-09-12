import axios from "axios";
export async function getFromDatabase(url) {
  console.time(url);
  const callUrl = "http://localhost:3003/" + url;
  console.error(`fetch from url: ${callUrl}`);

  const response = await axios.get(callUrl);
  console.error(`response from url: `, response?.data);
  console.timeEnd(url);

  return response.data || "NO DATA";
}

export function twoDigits(n) {
  return n > 9 ? "" + n : "0" + n;
}

export function msToDate(ms) {
  const matchDate = new Date(ms);
  var year = matchDate.getFullYear();
  var month = twoDigits(matchDate.getMonth() + 1);
  var date = twoDigits(matchDate.getDate());

  return date + "-" + month + "-" + year;
}
export function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}
export function msToDateTime(ms) {
  return msToDate(ms) + " " + msToTime(ms);
}
