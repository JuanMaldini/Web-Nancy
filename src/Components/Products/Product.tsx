import Button from "../Button/Button.tsx";
import "./Product.css";
import "../A-Helpers/Helper.css";
import { getWhatsappTemplate } from "../A-Helpers/Helper.tsx";
import { FaWhatsapp } from "react-icons/fa";

export type ProductProps = {
  label: string;
  productDescriptionTag: string;
  productDescriptionGeneral: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  price: string;
  onClick: () => void;
};

export default function Product({
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
  onClick,
}: ProductProps) {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ].filter((img) => img && img.trim() !== "");

  return (
    <div
      className="cardProduct" 
      data-bs-toggle="modal"
      data-bs-target={`#modal-${label.replace(/\s+/g, "")}`}
    >
      <div
        id={`carouselExample-${label.replace(/\s+/g, "")}`}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={img}
                className="carousel-img"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExample-${label.replace(/\s+/g, "")}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carouselExample-${label.replace(/\s+/g, "")}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <button
        className="card-body"
        data-bs-toggle="modal"
        data-bs-target={`#carouselExample-${label.replace(/\s+/g, "")}`}
      >
        <div>
          <p className="card-title">{label}</p>
        </div>
        <div className="tagClass">
          <div className="Class2">{productDescriptionTag}</div>
        </div>
        <div className="priceClass">
          <p>$ {price} ARS</p>
        </div>
      </button>

      <div className="cardlinks">
        <Button
          textButton="Ver más"
          data-bs-toggle="modal"
          data-bs-target={`#carouselExample-${label.replace(/\s+/g, "")}`}
          onClick={onClick}
          buttonClass="Class1 productButton"
        />
        <a
          className="whatsappIcon"
          href={getWhatsappTemplate(label)}
          target="_blank"
        >
          <FaWhatsapp style={{ color: "#25D366" }} />
        </a>
      </div>
    </div>
  );
}
