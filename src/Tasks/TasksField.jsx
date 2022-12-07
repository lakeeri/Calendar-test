import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import OneTask from './OneTask';
import './tasks.css';

export default function TasksField() {
  const navigate = useNavigate();
  const params = useParams();

  const tasks = useSelector((state) => state.tasks)
    .filter((task) => (
      task.year === params.year && task.month === params.month && task.date === params.date
    ));

  return (
    <div className="task-field">
      <button
        className="btn"
        type="submit"
        onClick={(() => navigate(`/tasks/create/${params.year}/${params.month}/${params.date}`))}
      >
        Новая задача

      </button>
      {tasks.length
        ? tasks.map((task, index) => (
          <OneTask
            key={index}
            task={task}
          />
        ))
        : <p>{`На ${params.date.padStart(2, '0')}.${+params.month + 1}.${params.year} ничего не запланировано`}</p>}
      <button className="btn" type="submit" onClick={(() => navigate('/'))}>OK</button>
    </div>
  );
}
