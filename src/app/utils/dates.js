import moment from "moment";


export function getDateFromTimestamp({ timestamp, format = "MMM Do, YYYY" }) {
  return moment.unix(timestamp).format(format) ?? "";
}

export function formatMomentDate({ date, format = "MMM Do, YYYY" }) {
  return moment(date).format(format);
}

export function formatMoney(value) {
  return parseFloat(value).toFixed(2);
}

export function formatDate(value){
  let options = {
    month: "short",
    day: "2-digit",
    hour12 : true,
    hour:  "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }
  let date = new Date(`${value}`).toLocaleDateString("en-US",options);
  return date;
}