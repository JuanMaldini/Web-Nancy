import Button from "../Button/Button.tsx";
import "./Product.css";
import "../A-Helpers/Helper.css";

export type ProductProps = {
  label: string;
  productDescription: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  price: string;
  Pdatabstoggle: string;
  Pdatabstarget: string;
  alt: string;
};

export default function Products({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  label,
  productDescription,
  price,
  Pdatabstoggle,
  Pdatabstarget,
}: ProductProps) {
  return (
    <div className="cardProduct">
      <div
        id={`carouselExample-${label.replace(/ /g, "_")}`}
        className="carousel slide"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              className="imageProduct"
              alt="Imagen 1 de producto"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="imageProduct"
              alt="Imagen 2 de producto"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="imageProduct"
              alt="Imagen 3 de producto"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image4}
              className="imageProduct"
              alt="Imagen 4 de producto"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image5}
              className="imageProduct"
              alt="Imagen 5 de producto"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image6}
              className="imageProduct"
              alt="Imagen 6 de producto"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image7}
              className="imageProduct"
              alt="Imagen 7 de producto"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExample-${label.replace(/ /g, "_")}`}
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
          data-bs-target={`#carouselExample-${label.replace(/ /g, "_")}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card-body">
        <h5 className="card-title my-2">{label}</h5>

        <div className="d-flex align-items-center justify-content-start">
          <Button
            destination={""}
            buttonClass="Class2 my-2"
            textButton={productDescription}
            databstoggle={""}
            databstarget={""}
          />
        </div>

        <p className="card-text my-2">$ {price} ARS</p>

        <div className="prodcutButton">
          <Button
            destination={"#"}
            buttonClass="Class1  my-2"
            textButton="Ver mas"
            databstoggle={Pdatabstoggle}
            databstarget={Pdatabstarget}
          />
        </div>
      </div>
    </div>
  );
}
