import React from 'react';
import CalendarDaysName from './CalendarDaysName';
import CalendarNavBar from './CalendarNavBar';
import CalendarWrapperItems from './CalendarWrapperItems';
import './calendar.css';

export default function CalendarField() {
  return (
    <div className="calendar_field">
      <CalendarNavBar />
      <CalendarDaysName />
      <CalendarWrapperItems />
    </div>
  );
}
