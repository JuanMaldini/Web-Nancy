import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Button from "../Button/Button";
import { getWhatsappTemplate } from "../A-Helpers/Helper";

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
};

function ModalProduct({
  // label,
  // productDescriptionTag,
  // productDescriptionGeneral,
  // image1,
  // image2,
  // image3,
  // image4,
  // image5,
  // image6,
  // image7,
  // price,
}: Props) {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const images = [
  //   image1,
  //   image2,
  //   image3,
  //   image4,
  //   image5,
  //   image6,
  //   image7,
  // ].filter(Boolean);

  return (
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default ModalProduct;
