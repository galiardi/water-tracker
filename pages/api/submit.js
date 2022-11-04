import { getSession } from "next-auth/react";
import apiSubmitDateConfirmation from "../../functions/apiSubmitDateConfirmation";
import db from "../../firebase/admin";
import { collection, doc, setDoc } from "firebase/firestore";

export default async function handleSubmit(req, res) {
  const session = getSession({ req });
  if (!session) return res.status(403).end();

  // verifica si ya se puede subir un nuevo registro
  const dateAllowedToSubmit = await apiSubmitDateConfirmation(db);
  if (!dateAllowedToSubmit) {
    return res
      .status(400)
      .json({ error: "Aun no es tiempo de hacer un registro" });
  }

  const { fields } = req.body;

  // verifica si faltan campos requeridos
  const { Andrea, Pablo, Rodrigo, cargoFijo, valorUnitarioM3 } = fields;
  const requiredFields = [Andrea, Pablo, Rodrigo, cargoFijo, valorUnitarioM3];
  if (!requiredFields.every((field) => Boolean(field))) {
    return res.status(400).json({ error: "Informacion incompleta." });
  }
  //
  try {
    await setDoc(doc(collection(db, "lecturas")), {
      ...fields,
      date: Date.now(),
    });

    return res.status(200).json({ response: "ok" });
  } catch (error) {
    res.status(500).json({ response: error });
  }
}
