import Button from "../Button/Button.tsx";
import "./Product.css";
import "../A-Helpers/Helper.css";
import { useState } from "react";

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

export default function Products({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  label,
  productDescriptionTag,
  productDescriptionGeneral,
  price,
  onClick,
}: ProductProps) {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  const validImages = images
    .map((img, index) => img ? { img, index } : null)
    .filter((image) => image !== null) as { img: string, index: number }[];

  const [activeImageIndex, setActiveImageIndex] = useState(validImages.length > 0 ? validImages[0].index : -1);

  const changeImage = (index: number) => {
    const validImage = validImages.find(image => image.index === index);
    if (validImage) {
      setActiveImageIndex(validImage.index);
    }
  };

  const nextImage = () => {
    const currentIndex = validImages.findIndex((item) => item.index === activeImageIndex);
    if (currentIndex < validImages.length - 1) {
      setActiveImageIndex(validImages[currentIndex + 1].index);
    }
  };

  const prevImage = () => {
    const currentIndex = validImages.findIndex((item) => item.index === activeImageIndex);
    if (currentIndex > 0) {
      setActiveImageIndex(validImages[currentIndex - 1].index);
    }
  };

  return (
    <div className="cardProduct">
      <div id={`carouselExample-${label.replace(/ /g, "_")}`} className="carousel slide">
        <div className="carousel-inner">{validImages.map((image) => (
          <div className={`carousel-item ${activeImageIndex === image.index ? "active" : ""}`} key={image.index}>
            <img src={image.img} className="imageProduct" alt={`Product image ${image.index + 1}`} />
          </div>))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevImage}
          disabled={activeImageIndex === validImages[0].index}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={nextImage}
          disabled={activeImageIndex === validImages[validImages.length - 1].index}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <a
        className="card-body-a"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
          
        <div className="card-body">
          <h5 className="card-title linkUnderline">{label}</h5>

          <div className="tagClass d-flex align-items-center justify-content-start">
            <Button
              destination={""}
              buttonClass="Class2"
              textButton={productDescriptionTag} />
          </div>

          <p className="priceClass">$ {price} ARS</p>

          <div className="prodcutButton">
            <Button
              textButton="Ver más"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={onClick}
              buttonClass="Class1 productButton"
            />
          </div>
        </div>
      </a>

    </div>
  );
}
