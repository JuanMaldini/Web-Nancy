import Product from "./Product.tsx";
import "./ProductsArea.css";
import {
  Flor1A,
  Flor1B,
  Flor2A,
  Flor2B,
  Flor3A,
  Flor3B,
  /*
  Flor4A,
  Flor4B,
  */
} from "./ABarrelProducts.tsx";
import Spacebar from "../Spacebar/Spacebar.tsx";


type Props = {};

export default function ProductsArea({}: Props) {
  return (
    <div className="productsArea pt-4 pb-2 m-0">
      <div className="container">
        <div className="text-center fs-2">
          <p>Productos</p>
        </div>
        <Spacebar />
        <div className="productsAreaProd py-2">

          <Product
            objectName="Nombre de producto 01"
            productDescription="Description"
            image1={Flor1A}
            image2={Flor1B}
            price="10.000"
            Pdatabstoggle={"modal"}
            Pdatabstarget={"#exampleModal"}
          />

          <Product
            objectName="Nombre de producto 02"
            productDescription="Description"
            image1={Flor2A}
            image2={Flor2B}
            price="15.000"
            Pdatabstoggle={"modal"}
            Pdatabstarget={"#exampleModal"}
          />

          <Product
            objectName="Nombre de producto 03"
            productDescription="Description"
            image1={Flor3A}
            image2={Flor3B}
            price="20.000"
            Pdatabstoggle={"modal"}
            Pdatabstarget={"#exampleModal"}
          />

        </div>
      </div>
    </div>
  );
}
