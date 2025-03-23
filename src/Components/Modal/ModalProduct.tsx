import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { getWhatsappContactProduct } from "../A-Helpers/Helper";
import { useState } from "react";
import ModalGallery from "./ModalGallery";

type Props = {
  label: string;
  productDescriptionTag: string;
  productDescriptionGeneral?: string;
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
  onClose: () => void;
  onClick?: () => void;
};

export default function ModalProduct({
  label,
  productDescriptionTag,
  productDescriptionGeneral,
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
  onClick,
}: Props) {
  const images = [image01, image02, image03, image04, image05, image06, image07, image08, image09, image010].filter(Boolean);

  const [selectedImage, setSelectedImage] = useState<{
    image01: string | undefined,
    image02: string | undefined,
    image03: string | undefined,
    image04: string | undefined,
    image05: string | undefined,
    image06: string | undefined,
    image07: string | undefined,
    image08: string | undefined,
    image09: string | undefined,
    image010: string | undefined,
   } | null>(null);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-product" onClick={(e) => e.stopPropagation()}>

        <button className="close-button-modal" onClick={onClose}><IoClose/></button>

        <div className="cardProduct-modal cardGeneral">
          <div id={`carouselExample-modal-${label.replace(/\s+/g, "")}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {images.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img src={item} className="carousel-img" alt={`Image ${index + 1}`} onClick={() => setSelectedImage({ image01: item, image02: "", image03: "", image04: "", image05: "", image06: "", image07: "", image08: "", image09: "", image010: "" })}/>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample-modal-${label.replace(/\s+/g, "")}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon-F" aria-hidden="true">{"<"}</span> 
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample-modal-${label.replace(/\s+/g, "")}`} data-bs-slide="next">
              <span className="carousel-control-next-icon-F" aria-hidden="true">{">"}</span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="card-body-modal">
            <div>
              <div className="card-title"><h2>{label}</h2></div>
            </div>

            <div className="tagClass">
              {productDescriptionTag.split(" ").map((word, index) => (
                <div key={index} className="Class2">{word}</div>
              ))}
            </div>

            <div className="card-product-description">
              <h6>{productDescriptionGeneral}</h6>
            </div>

            <div className="priceClass">
              <div><h6>{price} ARS</h6></div>
            </div>

            <div className="cardlinks">
              <div className="Class1 productButton">Contáctame!</div>
              <a className="whatsappIcon" href={getWhatsappContactProduct(label)} target="_blank"><FaWhatsapp className="" style={{ color: "#25D366" }} /></a>
            </div>
          </div>

        </div>
      </div>
      {selectedImage && (
            <ModalGallery
              image01={selectedImage.image01}
              image02={selectedImage.image02}
              image03={selectedImage.image03}
              image04={selectedImage.image04}
              image05={selectedImage.image05}
              image06={selectedImage.image06}
              image07={selectedImage.image07}
              image08={selectedImage.image08}
              image09={selectedImage.image09}
              image010={selectedImage.image010}
              onClose={() => setSelectedImage(null)}
            />
          )}
    </div>
  );
}