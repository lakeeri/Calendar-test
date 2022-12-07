import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import isCurrentDay from './currDayMaster';

export default function CalendarItem({
  date, className,
}) {
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks)
    .filter((task) => (
      +task.year === date.year && +task.month === date.month && +task.date === date.date
    ));

  return (
    <div
      className={className}
      onClick={(() => navigate(`/tasks/${date.year}/${date.month}/${date.date}`))}
    >
      <div className={isCurrentDay(date) ? 'current_date' : 'date'}>
        {date.date}
      </div>
      {(tasks.length <= 2)
        ? (
          <div className="task_list">
            {tasks.map((task, index) => <li className="task" key={index}>{task.title}</li>)}
          </div>
        )
        : (
          <div className="task_list">
            <li className="task">{tasks[0].title}</li>
            <li className="task">{tasks[1].title}</li>
            <div>{`+ ${tasks.length - 2} more`}</div>
          </div>
        )}
    </div>
  );
}
