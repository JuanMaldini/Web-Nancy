import "./Product.css";
import "../A-Helpers/Helper.css";
import { getWhatsappContactProduct } from "../A-Helpers/Helper.tsx";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export type ProductProps = {
  label: string;
  productDescriptionTag: string;
  productDescriptionGeneral?: string;
  price: string;
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
  onClick?: () => void;
};

export default function Product({
  label,
  productDescriptionTag,
  // productDescriptionGeneral,
  price,
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
  onClick,
}: ProductProps) {
  const images = [ image01, image02, image03, image04, image05, image06, image07, image08, image09, image010 ].filter((img) => img && img.trim() !== "");

  const [selectedProduct, setSelectedProduct] = useState<{
    label: string;
    productDescriptionTag: string;
    productDescriptionGeneral?: string;
    price: string;
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
  } | null>(null);

  return (
      <div className="cardProduct cardGeneral">

        <div id={`carouselExample-${label.replace(/\s+/g, "")}`} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={item} className="carousel-img" alt={`Image ${index + 1}`} onClick={onClick}/>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample-${label.replace(/\s+/g, "")}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon-F" aria-hidden="true">{"<"}</span> 
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample-${label.replace(/\s+/g, "")}`} data-bs-slide="next">
            <span className="carousel-control-next-icon-F" aria-hidden="true">{">"}</span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="card-body-pruduct" onClick={onClick}>
        <div>
          <h4 className="card-title">{label}</h4>
        </div>

          <div className="tagClass">
            {productDescriptionTag.split(" ").map((word, index) => (
              <div key={index} className="Class2">{word}</div>
            ))}
          </div>

          <div className="priceClass">
            <p className="m-0">{price} ARS</p>
          </div>

          <div className="cardlinks">
            <div className="Class1 productButton">Ver más</div>
            <a className="whatsappIcon" href={getWhatsappContactProduct(label)} target="_blank"><FaWhatsapp className="" style={{ color: "#25D366" }} /></a>
          </div>

        </div>
      </div>
  );
}
