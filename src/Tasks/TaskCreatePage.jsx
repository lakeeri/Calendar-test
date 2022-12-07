import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Calendar from 'react-calendar';
import { addTask } from '../redux/tasksSlice/tasksSlice';
import { addNotification } from '../redux/notificationSlice/notificationSlice';

export default function TaskCreatePage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date(params.year, params.month, params.date));

  const handleAddClose = (e, inputs) => {
    e.preventDefault();
    dispatch(addTask(Object.assign(params, inputs)));
    dispatch(addNotification(Object.assign(inputs, {
      year: value.getFullYear(),
      month: value.getMonth(),
      date: value.getDate(),
    })));
    navigate(`/tasks/${params.year}/${params.month}/${params.date}`);
    toast.success('Добавлена новая задача!', {
      autoClose: 2000,
      position: 'top-center',
    });
  };

  return (
    <div className="task_wrapper">
      <div className="task_info_form">
        <form
          className="modal_form"
          onSubmit={(e) => handleAddClose(e, Object.fromEntries(new FormData(e.target)))}
        >
          <div className="info_fields">
            <input type="text" name="title" placeholder="Новая задача" />
            <input className="time" type="time" name="start" />
            <input className="time" type="time" name="end" />
          </div>
          <div className="reminder_title">Напоминание:</div>
          <div className="reminder_fields">
            <Calendar
              value={value}
              onChange={setValue}
            />
            <div>
              <input type="time" name="notification" />
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
