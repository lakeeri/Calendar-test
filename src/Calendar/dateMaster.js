export default function dateMaster(currYear, currMonth) {
  const numbers = [];
  let date;
  const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  for (let i = firstDayofMonth - 1; i > 0; i--) {
    date = lastDateofLastMonth - i + 1;
    numbers.push({
      date,
      className: 'another_month',
      month: currMonth - 1,
      year: currYear,
    });
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    date = i;
    numbers.push({
      date,
      className: 'current_month',
      month: currMonth,
      year: currYear,
    });
  }

  const optimalLength = 42 - numbers.length;

  for (let i = 1; i <= optimalLength; i++) {
    date = i;
    numbers.push({
      date,
      className: 'another_month',
      month: currMonth + 1,
      year: currYear,
    });
  }

  return numbers;
}
