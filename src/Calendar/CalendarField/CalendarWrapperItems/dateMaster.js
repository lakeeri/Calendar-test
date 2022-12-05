export default function dateMaster(currYear, currMonth) {
  const numbers = [];
  let date;
  const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  for (let i = firstDayofMonth - 1; i > 0; i--) {
    date = lastDateofLastMonth - i + 1;
    numbers.push({
      date, className: 'date another_month', month: currMonth - 1,
    });
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    date = i;
    numbers.push({ date, className: 'date current_month', month: currMonth });
  }

  const optimalLength = 42 - numbers.length;

  for (let i = 1; i <= optimalLength; i++) {
    date = i;
    numbers.push({ date, className: 'date another_month', month: currMonth + 1 });
  }

  return numbers;
}
