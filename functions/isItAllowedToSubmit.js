export default function isItAllowedToSubmit(currentPeriod) {
  const now = Date.now(); // ms
  const currentMonth = new Date(now).getMonth(); // 0-11
  const currentYear = new Date(now).getFullYear();
  if (
    (currentMonth > currentPeriod.monthIndex &&
      currentYear === currentPeriod.year) ||
    currentYear > currentPeriod.year
  ) {
    return true;
  } else {
    return false;
  }
}
