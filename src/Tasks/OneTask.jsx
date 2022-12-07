import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../redux/tasksSlice/tasksSlice';

export default function OneTask({ task }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="one_task">
      <div className="info_wrapper">
        <div>{task.title}</div>
        <div>
          {' '}
          {`с ${task.start || '...'} по ${task.end || '...'} `}
        </div>
      </div>
      <div className="btn_wrapper">
        <button className="task_btn" type="submit" onClick={() => navigate(`/tasks/edit/${task.id}`)}>Редактировать</button>
        <button className="task_btn" type="submit" onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
      </div>
    </div>
  );
}
