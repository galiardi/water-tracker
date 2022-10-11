export default function getCurrentPeriod(dateInMs) {
  const months = [
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
  ];

  const date = new Date(dateInMs);

  const monthIndex = date.getMonth();

  const year = date.getFullYear();

  const monthName = months[monthIndex];

  let nextMonthName;

  if (monthIndex === 11) {
    nextMonthName = months[0];
  } else {
    nextMonthName = months[monthIndex + 1];
  }

  return { monthName, monthIndex, year, nextMonthName };
}
