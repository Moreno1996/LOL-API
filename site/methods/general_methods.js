export function twoDigits(n) {
    return n > 9 ? "" + n : "0" + n;
}


export function msToDate(ms) {
    const matchDate = new Date(ms);
    var year = matchDate.getFullYear();
    var month = twoDigits(matchDate.getMonth());
    var date = twoDigits(matchDate.getDate());

    return date + '-' + month + '-' + year;
}
export function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
export function msToDateTime(ms) {
    return msToDate(ms) + " " + msToTime(ms);
}