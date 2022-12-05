import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { setModalEditTask } from '../redux/modalSlices/modalEditTaskSlice';
import { editTask } from '../redux/tasksSlice/tasksSlice';

export default function ModalEditTask({ task }) {
  const modal = useSelector((state) => state.modalEditTask);
  const dispatch = useDispatch();
  const [eTask, setEditTask] = useState(task);

  const handleClose = () => {
    dispatch(setModalEditTask(null));
  };

  const editTaskHandle = (e) => {
    e.preventDefault();
    dispatch(editTask(eTask));
    dispatch(setModalEditTask(null));
  };

  const changeHandle = (text, field) => {
    setEditTask((prev) => ({ ...prev, [field]: text }));
  };
  return (
    <div>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Body>
          <form className="modal_form" onSubmit={editTaskHandle}>
            <input type="text" name="title" placeholder="Новая задача" value={eTask?.title} onChange={(e) => changeHandle(e.target.value, 'title')} />
            <input type="time" name="start" value={eTask?.start} onChange={(e) => changeHandle(e.target.value, 'start')} />
            <input type="time" name="end" value={eTask?.end} onChange={(e) => changeHandle(e.target.value, 'end')} />
            <Button className="btn_done" type="submit" variant="secondary">
              Готово
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
