import { useState } from "react";
import Product from "./Product.tsx";
import "./ProductsArea.css";

import Spacebar from "../Spacebar/Spacebar.tsx";
import ModalProduct from "../Modal/ModalProduct.tsx";
import dataProducts from "./data.ts";

type Props = {};

export default function ProductsArea({}: Props) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="productsArea">
      <div className="text-center">
        <p className="fs-2">Productos</p>
        <p className="fs-5">Para que los puedas tener todos en tu hogar</p>
      </div>
      <Spacebar />
      <div className="productsAreaProd">
        {dataProducts.map((item, index) => (
          <Product
            key={index}
            label={item.label}
            productDescription={item.productDescription}
            image1={item.image1}
            image2={item.image2}
            image3={item.image3}
            image4={item.image4}
            image5={item.image5}
            price={item.price}
            onClick={() => setSelectedProduct(item.label)}
          />
        ))}
      </div>
      {/* {selectedProduct && <ModalProduct imageG={selectedProduct} />} */}
    </div>
  );
}
