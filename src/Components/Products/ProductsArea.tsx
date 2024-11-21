import Product from "./Product.tsx";
import "./ProductsArea.css";

import Spacebar from "../Spacebar/Spacebar.tsx";
import dataProducts from "./data.ts";

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
          {dataProducts.map((item, index) => (
            <Product
              key={index}
              label={item.label}
              productDescription={item.productDescription}
              image1={item.image1}
              image2={item.image2}
              price={item.price}
              Pdatabstoggle={item.Pdatabstoggle}
              Pdatabstarget={item.Pdatabstarget}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
