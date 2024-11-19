import Product from "./Product.tsx";
import "./ProductsArea.css";
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
} from "./ABarrelProducts.tsx";

type Props = {};

export default function ProductsArea({}: Props) {
  return (
    <div className="productsArea">
      <div className="container">
        <div className="row row-cols-sm-3 row-cols-sm-3 row-cols-sm-3 g-4 my-3">
          <Product
            productName="Nombre de Producto 1"
            productDescription="Description"
            image1={Flor1A}
            image2={Flor1B}
            price="10.000"
            productPath=""
          />

          <Product
            productName="Nombre de Producto 2"
            productDescription="Description"
            image1={Flor2A}
            image2={Flor2B}
            price="10.000"
            productPath=""
          />
        </div>
      </div>
    </div>
  );
}
