import { getSession } from "next-auth/react";
import apiSubmitDateConfirmation from "../../functions/apiSubmitDateConfirmation";
import firebase from "../../firebase/client";

export default async function handleSubmit(req, res) {
  const session = getSession({ req });
  if (!session) return res.status(403).end();

  const db = firebase.firestore();

  //verifica si ya se puede subir un nuevo registro
  const dateAllowedToSubmit = await apiSubmitDateConfirmation(db);

  if (!dateAllowedToSubmit) {
    return res
      .status(400)
      .json({ error: "Aun no es tiempo de hacer un registro" });
  }

  const { form } = req.body;
  console.log(form);
  // const response = await db
  //   .collection("lecturas")
  //   .add({ ...form, date: Date.now() });

  return res.status(200).json({ response });
}
