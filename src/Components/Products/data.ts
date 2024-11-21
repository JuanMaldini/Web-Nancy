import Flor1A from "../../assets/Products/Flor_01_A.jpg";
import Flor1B from "../../assets/Products/Flor_01_B.jpg";
import Flor2A from "../../assets/Products/Flor_02_A.jpg";
import Flor2B from "../../assets/Products/Flor_02_B.jpg";
import { ProductProps } from "./Product";

export const dataProducts: ProductProps[] = [
  {
    alt: "Imagen de la flor 1",
    image1: Flor1A,
    image2: Flor1B,
    label: "Nombre de producto 01",
    Pdatabstoggle: "modal",
    Pdatabstarget: "#exampleModal",
    price: "10.000",
    productDescription: "",
  },
  {
    alt: "Imagen de la flor 2",
    image1: Flor2A,
    image2: Flor2B,
    label: "Nombre de producto 02",
    Pdatabstoggle: "modal",
    Pdatabstarget: "#exampleModal",
    price: "15.000",
    productDescription: "",
  },
];

export default dataProducts;
