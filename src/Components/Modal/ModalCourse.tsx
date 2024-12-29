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

        <div className="cardCurso-modal cardGeneral">
          <div className="cardCursosImg">
            <img src={imageCurso} className="img-curso" alt={`alt ${imageCurso}`}/>
          </div>
          <div className="cardCursosData">
            <div className="card-bodyCurso">
              <div>
                <div className="card-titleCurso">{label}</div>
              </div>
              <div className="tagCurso">
                {courseDescriptionTag.split(" ").map((word, index) => (
                  <div key={index} className="Class2">{word}</div>
                ))}
              </div>
              <div className="card-curso-description">
                <div>{courseDescriptionGeneral}</div>
              </div>
              <div className="priceClassCurso">
                <div>$ {price} ARS</div>
              </div>
              <div className="cardlinksCurso">
                <a className="Class1" href={getWhatsappContactCourse(label)} target="_blank">
                Contáctame!
                </a>
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