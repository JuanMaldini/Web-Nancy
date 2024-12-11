import { useState } from "react";
import "../Button/Button.css";

import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


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
  onClick?: () => void;
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

  const images = [image1, image2, image3, image4, image5, image6, image7].filter(Boolean);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const WelcomeText = `Hola, me gustaría más información sobre el ${label}.`;
  const WelcomeTextF = encodeURIComponent(WelcomeText);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{label}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>

          {images.length > 0 && (
            <div className="custom-carousel">
              <button className="custom-carousel-btn custom-carousel-prev" onClick={prevImage}>‹</button>
              <img src={images[currentImageIndex]} alt={`Product image ${currentImageIndex + 1}`} className="custom-carousel-image" />
              <button className="custom-carousel-btn custom-carousel-next" onClick={nextImage}>›</button>
            </div>
          )}
          
          <div className="modal-body">
            <p className="modal-tagline">{productDescriptionTag}</p>
            <p className="modal-description">{productDescriptionGeneral}</p>
            <p className="modal-price">${price} ARS</p>
          </div>

          <div className="modal-footer">
            <a className="whatsappIcon" href={`http://wa.me/5491135578288?text=${WelcomeTextF}`} target="_blank"><FaWhatsapp style={{ color: '#25D366' }} /></a>
            <button type="button" className="Class1" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
