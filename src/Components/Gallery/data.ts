import Flor1A from "../../assets/Products/Flor_01_A.jpg";
import Flor1B from "../../assets/Products/Flor_01_B.jpg";
import Flor2A from "../../assets/Products/Flor_02_A.jpg";
import Flor2B from "../../assets/Products/Flor_02_B.jpg";
import Flor3A from "../../assets/Products/Flor_03_A.jpg";
import Flor3B from "../../assets/Products/Flor_03_B.jpg";
import Flor4A from "../../assets/Products/Flor_04_A.jpg";
import Flor4B from "../../assets/Products/Flor_04_B.jpg";
interface ImagesProps {
  alt: string;
  src: string;
}
export const dataGalleryImages: ImagesProps[] = [
  {
    alt: "Imagen de la flor 1A",
    src: Flor1A,
  },
  {
    alt: "Imagen de la flor 1B",
    src: Flor1B,
  },
  {
    alt: "Imagen de la flor 2A",
    src: Flor2A,
  },
  {
    alt: "Imagen de la flor 2B",
    src: Flor2B,
  },
  {
    alt: "Imagen de la flor 3A",
    src: Flor3A,
  },
  {
    alt: "Imagen de la flor 3B",
    src: Flor4A,
  },
  {
    alt: "Imagen de la flor 4A",
    src: Flor3B,
  },
  {
    alt: "Imagen de la flor 4B",
    src: Flor4B,
  },
];

export default dataGalleryImages;
