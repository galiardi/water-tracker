export default function getPayments(data, consumo) {
  const {
    valorUnitarioM3,
    Andrea,
    Pablo,
    Rodrigo,
    cargoFijo,
    sobreconsumoVolumen,
    sobreconsumoValorUnitario,
  } = data;

  const aPayments = [];
  const pPayments = [];
  const rPayments = [];

  for (let i = 0; i < valorUnitarioM3.length; i++) {
    const aPayment = Math.ceil(
      valorUnitarioM3[i] * consumo.Andrea[i] + cargoFijo[i] / 3 + 400
    );
    aPayments.push(aPayment);

    const pPayment = Math.ceil(
      valorUnitarioM3[i] * consumo.Pablo[i] +
        cargoFijo[i] / 3 +
        sobreconsumoVolumen[i] *
          (sobreconsumoValorUnitario[i] - valorUnitarioM3[i]) +
        400
    );
    pPayments.push(pPayment);
    const rPayment = Math.ceil(
      valorUnitarioM3[i] * consumo.Rodrigo[i] +
        cargoFijo[i] / 3 +
        sobreconsumoVolumen[i] *
          (sobreconsumoValorUnitario[i] - valorUnitarioM3[i]) +
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
