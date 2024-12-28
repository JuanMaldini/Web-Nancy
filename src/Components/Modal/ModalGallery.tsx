import React from "react";
import "./Modal.css"; // Puedes añadir estilos básicos aquí.
import "../A-Helpers/Helper.css"

interface ModalProps {
  imageG: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageG, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <img src={imageG} alt="Selected Image" />
        </div>
      </div>
    </div>
  );
};

export default Modal;