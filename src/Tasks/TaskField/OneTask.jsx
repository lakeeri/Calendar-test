import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalEditTask } from '../../redux/modalSlices/modalEditTaskSlice';
import { deleteTask } from '../../redux/tasksSlice/tasksSlice';
import ModalEditTask from '../../ModalPages/ModalEditTask';

export default function OneTask({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="one_task">
      <div>{task.title}</div>
      <div>
        <button className="task_btn" type="submit" onClick={() => dispatch(setModalEditTask(true))}>Редактировать</button>
        <button className="task_btn" type="submit" onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
      </div>
      <ModalEditTask task={task} />
    </div>
  );
}
