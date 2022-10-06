export default function Data({ lecturas }) {
  let pesosA = ''
  let pesosP = ''
  let pesosR = ''
  if (lecturas.length > 1) {
    const lecturaAnterior = lecturas[1]
    const lecturaActual = lecturas[0]

    const volumenR =
      Number(lecturaActual.Rodrigo) - Number(lecturaAnterior.Rodrigo)

    const volumenP =
      Number(lecturaActual.Pablo) - Number(lecturaAnterior.Pablo) - volumenR

    const volumenA =
      Number(lecturaActual.Andrea) -
      Number(lecturaAnterior.Andrea) -
      volumenP -
      volumenR

    const cuotaCargoFijo = (Number(lecturaActual.cargoFijo) + 1200) / 3

    const cuotaSobreconsumo =
      ((lecturaActual.sobreconsumoValorUnitario -
        lecturaActual.valorUnitarioM3) *
        lecturaActual.sobreconsumoVolumen) /
      2

    pesosA = Math.ceil(
      volumenA * lecturaActual.valorUnitarioM3 + cuotaCargoFijo
    )
    pesosP = Math.ceil(
      volumenP * lecturaActual.valorUnitarioM3 +
        cuotaCargoFijo +
        cuotaSobreconsumo
    )
    pesosR = Math.ceil(
      volumenR * lecturaActual.valorUnitarioM3 +
        cuotaCargoFijo +
        cuotaSobreconsumo
    )
  }
  return (
    <>
      <p>{pesosA}</p>
      <p>{pesosP}</p>
      <p>{pesosR}</p>
    </>
  )
}
