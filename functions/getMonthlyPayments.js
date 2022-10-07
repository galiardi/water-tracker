import getMonthlyConsumption from "./getMonthlyConsumption";

export default function getMonthlyPayments(docs) {
  const cubePrices = docs.map((doc) => doc.valorUnitarioM3);
  cubePrices.shift();
  const cargosfijos = docs.map((doc) => doc.cargoFijo);
  cargosfijos.shift();
  const sobreconsumoValorUnitario = docs.map(
    (doc) => doc.sobreconsumoValorUnitario
  );
  sobreconsumoValorUnitario.shift();
  const sobreconsumoVolumen = docs.map((doc) => doc.sobreconsumoVolumen);
  sobreconsumoVolumen.shift();
  const consumption = getMonthlyConsumption(docs);

  const aPayments = [];
  const pPayments = [];
  const rPayments = [];

  for (let i = 0; i < cubePrices.length; i++) {
    const aPayment = Math.ceil(
      cubePrices[i] * consumption.Andrea[i] + cargosfijos[i] / 3 + 400
    );
    aPayments.push(aPayment);
    const pPayment = Math.ceil(
      cubePrices[i] * consumption.Pablo[i] +
        cargosfijos[i] / 3 +
        sobreconsumoVolumen[i] *
          (sobreconsumoValorUnitario[i] - cubePrices[i]) +
        400
    );
    pPayments.push(pPayment);
    const rPayment = Math.ceil(
      cubePrices[i] * consumption.Rodrigo[i] +
        cargosfijos[i] / 3 +
        sobreconsumoVolumen[i] *
          (sobreconsumoValorUnitario[i] - cubePrices[i]) +
        400
    );
    rPayments.push(rPayment);
  }

  return {
    Andrea: aPayments,
    Pablo: pPayments,
    Rodrigo: rPayments,
  };
}
