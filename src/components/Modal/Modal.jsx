import React from 'react';
import css from './Modal.module.css';

const Modal = ({ onClose, children }) => (
  <div className={css.overlay} onClick={onClose}>
    <div className={css.modal} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
);
export default Modal;