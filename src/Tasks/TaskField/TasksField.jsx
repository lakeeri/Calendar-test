import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setModalAddTask } from '../../redux/modalSlices/modalAddTaskSlice';
import ModalAddTask from '../../ModalPages/ModalAddTask';
import ModalSuccess from '../../ModalPages/ModalSuccess';
import OneTask from './OneTask';
import './TasksField.css';

export default function TasksField() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const tasks = useSelector((state) => state.tasks)
    .filter((task) => (
      task.year === params.year && task.month === params.month && task.date === params.date
    ));

  const clickHandler = () => {
    dispatch(setModalAddTask(true));
  };

  return (
    <div className="task-field">
      <button className="btn" type="submit" onClick={clickHandler}>Новая задача</button>
      {tasks.length
        ? tasks.map((task, index) => (
          <OneTask
            key={index}
            task={task}
          />
        ))
        : <p>Ничего не запланировано</p>}
      <ModalAddTask params={params} />
      <ModalSuccess />
      <button type="submit" onClick={(() => navigate('/'))}>OK</button>
    </div>
  );
}
