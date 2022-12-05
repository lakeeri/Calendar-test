import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CalendarItem({
  date, className, year,
}) {
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks)
    .filter((task) => (
      +task.year === year && +task.month === date.month && +task.date === date.date
    ));

  return (
    <div
      className={className}
      onClick={(() => navigate(`/tasks/${year}/${date.month}/${date.date}`))}
    >
      <div>
        {date.date}
      </div>
      {tasks.length
        ? tasks.map((task, index) => <div key={index}>{task.title}</div>)
        : <p />}
    </div>
  );
}
