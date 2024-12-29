import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { getWhatsappContactProduct } from "../A-Helpers/Helper";

type Props = {
  label: string;
  productDescriptionTag: string;
  productDescriptionGeneral?: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  price: string;
  onClose: () => void;
};

function ModalProduct({
  label,
  productDescriptionTag,
  productDescriptionGeneral,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  price,
  onClose,
}: Props) {
  const images = [image1,image2,image3,image4,image5,image6,image7,].filter(Boolean);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-product" onClick={(e) => e.stopPropagation()}>

        <button className="close-button-modal" onClick={onClose}><IoClose/></button>

        <div className="cardProduct cardGeneral">

          <div id={`carouselExample-${label.replace(/\s+/g, "")}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {images.map((img, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img src={img} className="carousel-img-modal" alt={`Image ${index + 1}`}/>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample-${label.replace(/\s+/g, "")}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample-${label.replace(/\s+/g, "")}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="card-body-modal">
            <div>
              <p className="card-title">{label}</p>
            </div>

            <div className="tagClass">
              {productDescriptionTag.split(" ").map((word, index) => (
                <div key={index} className="Class2">{word}</div>
              ))}
            </div>

            <div className="priceClass">
              <p className="m-0">$ {price} ARS</p>
            </div>

            <div className="card-product-description">
              <p>{productDescriptionGeneral}</p>
            </div>

            <div className="cardlinks">
              <div className="Class1 productButton">Ver más</div>
              <a className="whatsappIcon" href={getWhatsappContactProduct(label)} target="_blank"><FaWhatsapp className="" style={{ color: "#25D366" }} /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
