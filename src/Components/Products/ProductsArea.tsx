import Product from "./Product.tsx";
import "./Product.css";
import Spacebar from "../Spacebar/Spacebar.tsx";
import dataProducts from "./data.ts";
import { productsText } from "../A-Helpers/Helper.tsx";
import { useState } from "react";
import ModalProduct from "../Modal/ModalProduct.tsx";

type Props = {};

export default function ProductsArea({}: Props) {
  const [selectedProduct, setSelectedProduct] = useState<{
    label: string;
    productDescriptionTag: string;
    productDescriptionGeneral?: string;
    image01: string;
    image02?: string;
    image03?: string;
    image04?: string;
    image05?: string;
    image06?: string;
    image07?: string;
    image08?: string;
    image09?: string;
    image010?: string;
    price: string;
  } | null>(null);

  return (
    <div id="ProductsArea" className="productsArea">
      <div className="spacingArea">
        <div className="text-center">
          <p className="fs-2">Productos</p>
          <p className="fs-5">{productsText}</p>
        </div>
        <Spacebar />
        <div className="productsAreaProd">
          {dataProducts.map((item, index) => (
            <Product
              key={index}
              label={item.label}
              productDescriptionTag={item.productDescriptionTag}
              productDescriptionGeneral={item.productDescriptionGeneral}
              image01={item.image01}
              image02={item.image02}
              image03={item.image03}
              image04={item.image04}
              image05={item.image05}
              image06={item.image06}
              image07={item.image07}
              image08={item.image08}
              image09={item.image09}
              image010={item.image010}
              price={item.price}
              onClick={() => setSelectedProduct(item)}
            />
          ))}
        </div>
        {selectedProduct && (
          <ModalProduct
            label={selectedProduct.label}
            productDescriptionTag={selectedProduct.productDescriptionTag}
            productDescriptionGeneral={selectedProduct.productDescriptionGeneral}
            image01={selectedProduct.image01}
            image02={selectedProduct.image02}
            image03={selectedProduct.image03}
            image04={selectedProduct.image04}
            image05={selectedProduct.image05}
            image06={selectedProduct.image06}
            image07={selectedProduct.image07}
            image08={selectedProduct.image08}
            image09={selectedProduct.image09}
            image010={selectedProduct.image010}
            price={selectedProduct.price}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
}
