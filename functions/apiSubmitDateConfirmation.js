import { isItAllowedToSubmit, getCurrentPeriod } from "../functions";

export default async function apiSubmitDateConfirmation(db) {
  let data;
  const querySnapshot = await db
    .collection("lecturas")
    .orderBy("date", "desc")
    .limit(1)
    .get();
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });

  const { date } = data;
  const currentPeriod = getCurrentPeriod(date);
  return isItAllowedToSubmit(currentPeriod);
}
