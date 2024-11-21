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
        <div className="text-center fs-2">
          <p>Galería</p>
        </div>
        <Spacebar />
        <div className="row row-cols-sm-3 row-cols-sm-3 row-cols-sm-3 g-3 my-2">
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
