export default function isCurrentDay(date) {
  if (date.year === new Date().getFullYear()
  && date.month === new Date().getMonth()
  && date.date === new Date().getDate()) {
    return true;
  } return false;
}
