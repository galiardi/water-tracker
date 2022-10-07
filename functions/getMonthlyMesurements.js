function getMonthlyMesurementsByUser(docs, user) {
  return docs.map((doc) => doc[user]);
}

export default function getMonthlyMesurements(docs) {
  return {
    Andrea: getMonthlyMesurementsByUser(docs, "Andrea"),
    Pablo: getMonthlyMesurementsByUser(docs, "Pablo"),
    Rodrigo: getMonthlyMesurementsByUser(docs, "Rodrigo"),
  };
}
