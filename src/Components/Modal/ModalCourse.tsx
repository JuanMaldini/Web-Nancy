import React from "react";
import "./Modal.css"; // Puedes añadir estilos básicos aquí.
import "../A-Helpers/Helper.css"
import { getWhatsappContactCourse } from "../A-Helpers/Helper";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  label: string;
  courseDescriptionTag: string;
  courseDescriptionGeneral?: string;
  imageCurso: string;
  price: string;
  onClose?: () => void;
}

const ModalCourse: React.FC<ModalProps> = ({
  label,
  courseDescriptionTag,
  courseDescriptionGeneral,
  imageCurso,
  price,
  onClose,
}) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-curso" onClick={(e) => e.stopPropagation()}>

        <button className="close-button-modal" onClick={onClose}><IoClose/></button>

        <div className="cardCurso cardGeneral">
          <div className="cardCursosImg">
            <img src={imageCurso} className="img-curso" alt={`alt ${imageCurso}`}/>
          </div>
          <div className="cardCursosData">
            <div className="card-bodyCurso">
              <div>
                <p className="card-titleCurso">{label}</p>
              </div>
              <div className="tagCurso">
                {courseDescriptionTag.split(" ").map((word, index) => (
                  <div key={index} className="Class2">{word}</div>
                ))}
              </div>
              <div className="card-curso-description">
                <p>{courseDescriptionGeneral}</p>
              </div>
              <div className="priceClassCurso">
                <p className="m-0">$ {price} ARS</p>
              </div>
              <div className="cardlinksCurso">
                <p>Contáctame!</p>
                <a className="whatsappIcon" href={getWhatsappContactCourse(label)} target="_blank"><FaWhatsapp className="" style={{ color: "#25D366" }} /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModalCourse;