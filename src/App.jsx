import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import CalendarField from './Calendar/CalendarField';
import TasksField from './Tasks/TasksField';
import TaskEditPage from './Tasks/TaskEditPage';
import TaskCreatePage from './Tasks/TaskCreatePage';
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import { deleteNotification } from './redux/notificationSlice/notificationSlice';

function App() {
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(false);
  const notifications = useSelector((state) => state.notifications);

  useEffect(() => {
    setTimeout(() => {
      setTrigger((prev) => !prev);
    }, 10000);

    notifications.forEach((note) => {
      if (Date.now() > new Date(
        note.year,
        note.month,
        note.date,
        note.notification.slice(0, 2),
        note.notification.slice(3),
      )) {
        toast.info(
          `У вас запланировано ${note.title} c ${note.start || '...'} по ${note.end || '...'}`,
          {
            autoClose: 600000,
            position: 'bottom-left',
          },
        );
        dispatch(deleteNotification(note.id));
      }
    });
  }, [trigger]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CalendarField />} />
        <Route path="/tasks/:year/:month/:date" element={<TasksField />} />
        <Route path="/tasks/edit/:id" element={<TaskEditPage />} />
        <Route path="/tasks/create/:year/:month/:date" element={<TaskCreatePage />} />
      </Routes>
      <ToastContainer
        hideProgressBar
      />
    </div>
  );
}

export default App;
