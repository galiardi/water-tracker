import getLastMonth from "./getLastMonth";

export default function getMonths(docs) {
  const months = docs.map((doc) => getLastMonth(doc.date));
  return months;
}
