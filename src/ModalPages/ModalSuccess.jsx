import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './modalStyle.css';
import Modal from 'react-bootstrap/Modal';
import { setModalSuccess } from '../redux/modalSlices/modalSuccessSlice';

export default function ModalSuccess() {
  const modal = useSelector((state) => state.modalSuccess);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setModalSuccess(null));
  };

  useEffect(() => {
    setTimeout(() => dispatch(setModalSuccess(null)), 2000);
  }, [modal]);

  return (
    <div>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Body>
          <p>Событие добавлено</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
