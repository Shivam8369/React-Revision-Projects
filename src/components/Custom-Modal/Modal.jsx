import React from "react";
import './modal.css';

const Modal = ({ id, Header, Body, Footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="Modal-Container">
        <div className="header">
          <span onClick={onClose} style={{ cursor: "pointer" }} className="close-modal-icon">
            &times;
          </span>
          {Header ? Header : <div>Header box</div>}
        </div>

        <div className="body">{Body ? Body : <div>Body box</div>}</div>

        <div className="footer">{Footer ? Footer : <div>Footer box</div>}</div>
      </div>
    </div>
  );
};

export default Modal;
