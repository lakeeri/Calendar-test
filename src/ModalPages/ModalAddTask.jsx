import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { setModalAddTask } from '../redux/modalSlices/modalAddTaskSlice';
import './modalStyle.css';
import { addTask } from '../redux/tasksSlice/tasksSlice';
import { setModalSuccess } from '../redux/modalSlices/modalSuccessSlice';

export default function ModalAddTask({ params }) {
  const modal = useSelector((state) => state.modalAddTask);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalAddTask(null));
  };
  const handleAddClose = (e, inputs) => {
    e.preventDefault();
    dispatch(addTask(Object.assign(params, inputs)));
    dispatch(setModalAddTask(null));
    dispatch(setModalSuccess(true));
  };

  return (
    <div>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Body>
          <form className="modal_form" onSubmit={(e) => handleAddClose(e, Object.fromEntries(new FormData(e.target)))}>
            <input type="text" name="title" placeholder="Новая задача" />
            <input type="time" name="start" />
            <input type="time" name="end" />
            <Button className="btn_done" type="submit" variant="secondary">
              Готово
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
