import React from 'react';
import CalendarDaysName from './CalendarDaysName/CalendarDaysName';
import CalendarNavBar from './CalendarNavBar/CalendarNavBar';
import CalendarWrapperItems from './CalendarWrapperItems/CalendarWrapperItems';
import './CalendarField.css';

export default function CalendarField() {
  return (
    <div className="calendar_field">
      <CalendarNavBar />
      <CalendarDaysName />
      <CalendarWrapperItems />
    </div>
  );
}
