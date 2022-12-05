import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrMonth } from '../../../redux/currMonthSlice/currMonthSlice';
import { setCurrYear } from '../../../redux/currYearSlice/currYearSlice';

export default function CalendarNavBar() {
  const dispatch = useDispatch();
  const months = useSelector((state) => state.months);
  const years = useSelector((state) => state.years);
  const currYear = useSelector((state) => state.currYear);
  const currMonth = useSelector((state) => state.currMonth);

  return (
    <div className="calendar_navbar">
      <select className="navbar_select" defaultValue={currMonth} onChange={(e) => dispatch(setCurrMonth(Number(e.target.value)))} name="months" id="">
        {months.map((month, index) => <option key={index} value={index}>{month}</option>)}
      </select>
      <select className="navbar_select" defaultValue={currYear} onChange={(e) => dispatch(setCurrYear(Number(e.target.value)))} name="years" id="">
        {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
      </select>
    </div>
  );
}
