import { useState } from "react";
import Gallery from "./Gallery";
import "./GalleryArea.css";
import {
  Flor1A,
  Flor1B,
  Flor2A,
  Flor2B,
  /*
  Flor3A,
  Flor3B,
  Flor4A,
  Flor4B,
  */
} from "./ABarrelGallery";
import Spacebar from "../Spacebar/Spacebar";
import ModalGallery from "../Modal/ModalGallery";

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

          <Gallery
            imageG={Flor1A}
            databstoggle={"modal"}
            databstarget={"#exampleModal"}
            onClick={() => setSelectedImage(Flor1A)}
          />

          <Gallery
            imageG={Flor1B}
            databstoggle={"modal"}
            databstarget={"#exampleModal"}
            onClick={() => setSelectedImage(Flor1B)}
          />

          <Gallery
            imageG={Flor2A}
            databstoggle={"modal"}
            databstarget={"#exampleModal"}
            onClick={() => setSelectedImage(Flor2A)}
          />

          <Gallery
            imageG={Flor2B}
            databstoggle={"modal"}
            databstarget={"#exampleModal"}
            onClick={() => setSelectedImage(Flor2B)}
          />

        </div>
      </div>

      {selectedImage && (
        <ModalGallery
          imageG={selectedImage}
        />
      )}

    </div>
  );
}
