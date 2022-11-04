import { isItAllowedToSubmit, getCurrentPeriod } from "../functions";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("capital", "==", true));

export default async function apiSubmitDateConfirmation(db) {
  const q = query(
    collection(db, "lecturas"),
    orderBy("date", "desc"),
    limit(1)
  );

  const querySnapshot = await getDocs(q);

  let data;
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });

  const { date } = data;
  const currentPeriod = getCurrentPeriod(date);
  return isItAllowedToSubmit(currentPeriod);
}
