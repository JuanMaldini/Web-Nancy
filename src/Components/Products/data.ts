import Aros01 from "../../assets/Fotos/Aros 01/IMG-20241121-WA0059.jpg";
import Aros02 from "../../assets/Fotos/Aros 01/IMG-20241121-WA0060.jpg";
import Aros03 from "../../assets/Fotos/Aros 01/IMG-20241121-WA0061.jpg";
import Aros04 from "../../assets/Fotos/Aros 01/IMG-20241121-WA0062.jpg";
import Aros05 from "../../assets/Fotos/Aros 01/IMG-20241121-WA0068.jpg";

import Cartera01 from "../../assets/Fotos/Cartera 01/IMG-20241121-WA0038.jpg"
import Cartera02 from "../../assets/Fotos/Cartera 01/IMG-20241121-WA0039.jpg"
import Cartera03 from "../../assets/Fotos/Cartera 01/IMG-20241121-WA0040.jpg"

import Castillo01 from "../../assets/Fotos/Castillo 01/IMG-20241121-WA0046.jpg";
import Castillo02 from "../../assets/Fotos/Castillo 01/IMG-20241121-WA0047.jpg";
import Castillo03 from "../../assets/Fotos/Castillo 01/IMG-20241121-WA0048.jpg";
import Castillo04 from "../../assets/Fotos/Castillo 01/IMG-20241121-WA0051.jpg";
import Castillo05 from "../../assets/Fotos/Castillo 01/IMG-20241121-WA0065.jpg";
import Castillo06 from "../../assets/Fotos/Castillo 01/IMG-20241121-WA0066.jpg";

import Colgante04_01 from "../../assets/Fotos/Colgante 04/IMG-20241121-WA0054.jpg"

import { ProductProps } from "./Product";

export const dataProducts: ProductProps[] = [
  {
    alt: "Arcos imagene",
    image1: Aros01,
    image2: Aros02,
    image3: Aros03,
    image4: Aros04,
    image5: Aros05,
    label: "Arcos",
    Pdatabstoggle: "modal",
    Pdatabstarget: "#exampleModal",
    price: "10.000",
    productDescription: "Description 1",
  },

  {
    alt: "Cartera imagen",
    image1: Cartera01,
    image2: Cartera02,
    image3: Cartera03,
    label: "Cartera",
    Pdatabstoggle: "modal",
    Pdatabstarget: "#exampleModal",
    price: "15.000",
    productDescription: "Description 2",
  },

  {
    alt: "Castillo imagen",
    image1: Castillo01,
    image2: Castillo02,
    image3: Castillo03,
    image4: Castillo04,
    image5: Castillo05,
    image6: Castillo06,
    label: "Castillo",
    Pdatabstoggle: "modal",
    Pdatabstarget: "#exampleModal",
    price: "15.000",
    productDescription: "Castillo de tela",
  },

  {
    alt: "Colgante 04 imagen",
    image1: Colgante04_01,
    label: "Colgante 04",
    Pdatabstoggle: "modal",
    Pdatabstarget: "#exampleModal",
    price: "15.000",
    productDescription: "Colgante de tela",
  },
  

];

export default dataProducts;
