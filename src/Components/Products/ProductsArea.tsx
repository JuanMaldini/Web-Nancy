import Product from "./Product.tsx";
import "./ProductsArea.css";
import {
  Flor1A,
  Flor1B,
  /*
  Flor2A,
  Flor2B,
  Flor3A,
  Flor3B,
  Flor4A,
  Flor4B,
  */
} from "./ABarrelProducts.tsx";

type Props = {};

export default function ProductsArea({}: Props) {
  return (
    <div className="productsArea">
      <div className="container">
        <div className="d-flex flex-row align-items-center">
          <Product
//            Id={1}
            productName="Nombre de Producto"
            productDescription="Description"
            image1={Flor1A}
            image2={Flor1B}
            price="10.000"
            productPath=""
          />
        </div>
      </div>
    </div>
  );
}
