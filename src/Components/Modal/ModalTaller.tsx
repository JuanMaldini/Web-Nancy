import React, { useState } from "react";
import "./Modal.css"; // Puedes añadir estilos básicos aquí.
import "../A-Helpers/Helper.css";
import { getWhatsappContactTaller } from "../A-Helpers/Helper";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ModalGallery from "./ModalGallery";

interface ModalProps {
  label: string;
  tallerDescriptionTag: string;
  tallerDescriptionGeneral?: string;
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
  price: string;
  onClose?: () => void;
}

const ModalTaller: React.FC<ModalProps> = ({
  label,
  tallerDescriptionTag,
  tallerDescriptionGeneral,
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
  price,
  onClose,
}) => {

  const images = [ image01, image02, image03, image04, image05, image06, image07, image08, image09, image010, ].filter(Boolean);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-curso" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-modal" onClick={onClose}>
          <IoClose />
        </button>

        <div className="cardCurso-modal cardGeneral">
          <div className="cardCursosImg">

            <div
              id={`carouselExample-modal-${label.replace(/\s+/g, "")}`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {images.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={item}
                      className="carousel-img img-curso0"
                      alt={`Image ${index + 1}`}
                      onClick={() => setSelectedImage(item)}

                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExample-modal-${label.replace(
                  /\s+/g,
                  ""
                )}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon-F"
                  aria-hidden="true"
                >
                  {"<"}
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExample-modal-${label.replace(
                  /\s+/g,
                  ""
                )}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon-F"
                  aria-hidden="true"
                >
                  {">"}
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="cardCursosData">
            <div className="card-bodyCurso">
              <div>
                <div className="card-titleCurso">{label}</div>
              </div>
              <div className="tagCurso">
                {tallerDescriptionTag.split(" ").map((word, index) => (
                  <div key={index} className="Class2">
                    {word}
                  </div>
                ))}
              </div>
              <div className="card-curso-description">
                <div>{tallerDescriptionGeneral}</div>
              </div>
              <div className="priceClassCurso">
                <div>{price}</div>
                {/* <div>$ {price} ARS</div> */}
              </div>
              <div className="cardlinksCurso">
                <a
                  className="Class1"
                  href={getWhatsappContactTaller(label)}
                  target="_blank"
                >
                  Contáctame!
                </a>
                <a
                  className="whatsappIcon"
                  href={getWhatsappContactTaller(label)}
                  target="_blank"
                >
                  <FaWhatsapp className="" style={{ color: "#25D366" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {selectedImage && (
          <ModalGallery
            image01={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ModalTaller;
