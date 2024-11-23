import { useState } from "react";
import Gallery from "./Gallery";
import "./GalleryArea.css";

import Spacebar from "../Spacebar/Spacebar";
import ModalGallery from "../Modal/ModalGallery";
import dataGalleryImages from "./data";

type Props = {};

export default function ProductsArea({}: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bodyGalleryArea pt-4 pb-2 m-0">
      <div className="container">
        <div className="text-center">
          <p className="fs-2">Galería</p>
          <p className="fs-5">Una bella muestra de mis trabajos</p>
        </div>
        <Spacebar />
        <div className="galleryArea">
          {dataGalleryImages.map((item, index) => (
            <Gallery
              key={index}
              imageG={item.src}
              databstoggle={"modal"}
              databstarget={"#exampleModal"}
              onClick={() => setSelectedImage(item.src)}
            />
          ))}
        </div>
      </div>

      {selectedImage && <ModalGallery imageG={selectedImage} />}
    </div>
  );
}
