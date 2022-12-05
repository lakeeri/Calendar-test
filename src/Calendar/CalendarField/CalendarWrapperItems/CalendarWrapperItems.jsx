import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CalendarItem from './CalendarItem/CalendarItem';
import dateMaster from './dateMaster';
import './WrapperItems.css';

export default function CalendarWrapperItems() {
  const currYear = useSelector((state) => state.currYear);
  const currMonth = useSelector((state) => state.currMonth);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates(dateMaster(currYear, currMonth));
  }, [currYear, currMonth]);

  return (
    <div className="calendar_wrapperitems">
      {dates.map((date, index) => (
        <CalendarItem
          key={index}
          className={date.className}
          date={date}
          year={currYear}
        />
      ))}
    </div>
  );
}
