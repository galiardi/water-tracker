export default function getConsumo(usersRecords) {
  const andrea = [];
  const pablo = [];
  const rodrigo = [];
  for (let i = 1; i < usersRecords.Andrea.length; i++) {
    const rodrigoConsumption =
      Number(usersRecords.Rodrigo[i]) - Number(usersRecords.Rodrigo[i - 1]);
    rodrigo.push(rodrigoConsumption);

    const pabloConsumption =
      Number(usersRecords.Pablo[i]) -
      Number(usersRecords.Pablo[i - 1]) -
      rodrigoConsumption;
    pablo.push(pabloConsumption);

    const andreaConsumption =
      Number(usersRecords.Andrea[i]) -
      Number(usersRecords.Andrea[i - 1]) -
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
