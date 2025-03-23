import React, { useState } from "react";
import "./Modal.css"; // Puedes añadir estilos básicos aquí.
import "../A-Helpers/Helper.css"
import { IoClose } from "react-icons/io5";

interface ModalProps {
  label?:string;
  image01: string;
  image02?: string;
  image03?: string;
  image04?: string;
  image05?: string;
  image06?: string;
  image07?: string;
  image08?: string;
  image09?: string;
  image010?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  label,
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image010,
  onClose,
 }) => {
    const images = [image01, image02, image03, image04, image05, image06, image07, image08, image09, image010].filter(Boolean);
  
    const [selectedImage, setSelectedImage] = useState<{
      label: string,
      image01: string,
      image02: string,
      image03: string,
      image04: string,
      image05: string,
      image06: string,
      image07: string,
      image08: string,
      image09: string,
      image010: string,
     } | null>(null);
     
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-gallery" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-modal" onClick={onClose}><IoClose/></button>
        <div className="modal-body-gallery">          

          <div id={`carouselExample-modal-${(label || "").replace(/\s+/g, "")}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <img src={image01} className="carousel-img" onClick={() => setSelectedImage({image01})}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;