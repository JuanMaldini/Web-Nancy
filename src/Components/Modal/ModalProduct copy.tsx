import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Button from "../Button/Button";
import { getWhatsappTemplate } from "../A-Helpers/Helper";

type Props = {
  label: string;
  productDescriptionTag: string;
  productDescriptionGeneral: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  price: string;
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
}: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ].filter(Boolean);

  return (
  <div className="modal fade" id={`modal-${label.replace(/\s+/g, "")}`} tabIndex={-1} aria-labelledby="modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{label}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div id={`carouselExample-Modal-${label.replace(/\s+/g, "")}`} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {images.map((img, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img src={img} className="carousel-img" alt={`Image ${index + 1}`}/>
                  </div>
                ))}
              </div>  

              <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample-Modal-${label.replace(/\s+/g, "")}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample-Modal-${label.replace(/\s+/g, "")}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="card-body">
            <div>
              <p className="card-title">{label}</p>
            </div>
            <div className="tagClass">
              <div className="Class2">{productDescriptionTag}</div>
            </div>
            <div className="descriptionGeneral">
              <div>{productDescriptionGeneral}</div>
            </div>
            <div className="priceClass">
              <p>$ {price} ARS</p>
            </div>
          </div>

          <div className="cardlinks">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <a className="whatsappIcon" href={getWhatsappTemplate(label)} target="_blank"><FaWhatsapp style={{ color: "#25D366" }} /></a>
          </div>

      </div>
    </div>
  </div>
  );
}

export default ModalProduct;
