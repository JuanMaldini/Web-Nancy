import Gallery from "./Gallery";
import "./GalleryArea.css";
import "../A-Helpers/Helper.css";

import Spacebar from "../Spacebar/Spacebar";
// import ModalGallery from "../Modal/ModalGallery";
import dataGalleryImages from "./data";

type Props = {};

export default function ProductsArea({}: Props) {
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="bodyGalleryArea" id="GalleryArea">
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
              // onClick={() => setSelectedImage(item.src)}
            />
          ))}
        </div>

        {/* {selectedImage && <ModalGallery imageG={selectedImage} />} */}
      </div>
    </>
  );
}
