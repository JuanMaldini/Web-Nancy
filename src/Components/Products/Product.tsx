import "./Product.css";
import "../A-Helpers/Helper.css";
import { getWhatsappContactProduct } from "../A-Helpers/Helper.tsx";
import { FaWhatsapp } from "react-icons/fa";

export type ProductProps = {
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
  onClick?: () => void;
};

export default function Product({
  label,
  productDescriptionTag,
  // productDescriptionGeneral, onClick,
  image1, image2, image3, image4, image5, image6, image7, price,}: ProductProps) {

    const images = [ image1, image2, image3, image4, image5, image6, image7 ].filter((img) => img && img.trim() !== "");

  return (
    <>

      <div className="cardProduct">

        <div id={`carouselExample-${label.replace(/\s+/g, "")}`} className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner">
            {images.map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={img} className="carousel-img" alt={`Image ${index + 1}`}/>
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

        <div className="card-body">
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
        </div>

        <div className="cardlinks">
          <div
          // data-bs-toggle="modal"
          // data-bs-target="#exampleModal"
          className="Class1 productButton">Ver más</div>
          <a className="whatsappIcon" href={getWhatsappContactProduct(label)} target="_blank"><FaWhatsapp className="" style={{ color: "#25D366" }} /></a>
        </div>

      </div>

    </>
  );
}
