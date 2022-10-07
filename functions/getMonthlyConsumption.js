import getMonthlyMesurements from "./getMonthlyMesurements";

export default function getMonthlyConsumption(docs) {
  const mesurements = getMonthlyMesurements(docs);

  const andrea = [];
  const pablo = [];
  const rodrigo = [];

  for (let i = 1; i < mesurements.Andrea.length; i++) {
    const rodrigoConsumption =
      Number(mesurements.Rodrigo[i]) - Number(mesurements.Rodrigo[i - 1]);
    rodrigo.push(rodrigoConsumption);

    const pabloConsumption =
      Number(mesurements.Pablo[i]) -
      Number(mesurements.Pablo[i - 1]) -
      rodrigoConsumption;
    pablo.push(pabloConsumption);

    const andreaConsumption =
      Number(mesurements.Andrea[i]) -
      Number(mesurements.Andrea[i - 1]) -
      pabloConsumption -
      rodrigoConsumption;
    andrea.push(andreaConsumption);
  }
  return {
    Andrea: andrea,
    Pablo: pablo,
    Rodrigo: rodrigo,
  };
}
