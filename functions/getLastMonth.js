export default function getLastMonth(dateInMs) {
  const date = new Date(dateInMs);
  const currentMonthNumber = date.getMonth();

  let lastMonthNumber;
  if (currentMonthNumber === 0) {
    lastMonthNumber = 11;
  } else {
    lastMonthNumber = currentMonthNumber - 1;
  }

  const lastMonthName = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ][lastMonthNumber];
  return lastMonthName;
}
