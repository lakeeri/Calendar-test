import React from 'react';
import { useSelector } from 'react-redux';

export default function CalendarDaysName() {
  const nameDays = useSelector(((state) => state.nameDays));
  return (
    <div className="calendar-daysname">
      {nameDays.map((name, index) => <div key={index} className="names">{name}</div>)}
    </div>
  );
}
