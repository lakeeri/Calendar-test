import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import { editTask } from '../redux/tasksSlice/tasksSlice';

export default function TaskEditPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks)
    .filter((el) => el.id === params.id)[0];
  const [value, setValue] = useState(new Date(task.year, task.month, task.date));
  const [eTask, setEditTask] = useState(task);

  const editTaskHandle = (e) => {
    e.preventDefault();
    dispatch(editTask(eTask));
    navigate(`/tasks/${task.year}/${task.month}/${task.date}`);
  };

  const changeHandle = (text, field) => {
    setEditTask((prev) => ({ ...prev, [field]: text }));
  };

  return (
    <div className="task_wrapper">
      <div className="task_info_form">
        <form
          className="modal_form"
          onSubmit={editTaskHandle}
        >
          <div className="info_fields">
            <input type="text" name="title" placeholder="Новая задача" value={eTask?.title} onChange={(e) => changeHandle(e.target.value, 'title')} />
            <input className="time" type="time" name="start" value={eTask?.start} onChange={(e) => changeHandle(e.target.value, 'start')} />
            <input className="time" type="time" name="end" value={eTask?.end} onChange={(e) => changeHandle(e.target.value, 'end')} />
          </div>
          <div className="reminder_title">Напоминание:</div>
          <div className="reminder_fields">
            <Calendar
              value={value}
              onChange={setValue}
            />
            <div>
              <input type="time" name="notification" value={eTask?.notification} onChange={(e) => changeHandle(e.target.value, 'notification')} />
            </div>
          </div>
          <button className="btn done" type="submit">
            Готово
          </button>
        </form>
      </div>
    </div>
  );
}
