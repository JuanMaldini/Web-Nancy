import React from "react";
import "./Modal.css"; // Puedes añadir estilos básicos aquí.
import "../A-Helpers/Helper.css"
import { IoClose } from "react-icons/io5";

interface ModalProps {
  imageG: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageG, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-gallery" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-modal" onClick={onClose}><IoClose/></button>
        <div className="modal-body-gallery">
          <img src={imageG} alt="Selected image from gallery" />
        </div>
      </div>
    </div>
  );
};

export default Modal;