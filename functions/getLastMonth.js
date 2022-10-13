export default function getLastMonth(dateInMs) {
  const date = new Date(dateInMs);
  const lastMonth = [
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
  ][date.getMonth() - 1];
  return lastMonth;
}
