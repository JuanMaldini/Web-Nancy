import Gallery from "./Gallery.tsx";
import "./Gallery.css";
import "../A-Helpers/Helper.css";

import Spacebar from "../Spacebar/Spacebar";
import ModalGallery from "../Modal/ModalGallery";
import dataGalleryImages from "./data";
import { useState } from "react";
import { galleryText } from "../A-Helpers/Helper.tsx";

type Props = {};

export default function ProductsArea({}: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="bodyGalleryArea" id="GalleryArea">
        <div className="GalleryBG">
          <div className="text-center">
            <p className="fs-2">Galería</p>
            <p className="fs-5">{galleryText}</p>
          </div>

          <Spacebar />

          <div className="galleryArea">
            {dataGalleryImages.map((item, index) => (
              <Gallery key={index}  imageG={item.src}
                onClick={() => setSelectedImage(item.src)}
              />
            ))}
          </div>

          {selectedImage && <ModalGallery imageG={selectedImage} />}
        </div>
      </div>
    </>
  );
}
