import Product from "./Product.tsx";
import "./Product.css";
import Spacebar from "../Spacebar/Spacebar.tsx";
// import ModalProduct from "../Modal/ModalProduct.tsx";
import dataProducts from "./data.ts";
import { productsText } from "../A-Helpers/Helper.tsx";

type Props = {};

export default function ProductsArea({}: Props) {

  // const [selectedProduct, setSelectedProduct] = useState<{
  //   label: string;
  //   productDescriptionTag: string;
  //   productDescriptionGeneral?: string;
  //   image1: string;
  //   image2?: string;
  //   image3?: string;
  //   image4?: string;
  //   image5?: string;
  //   image6?: string;
  //   image7?: string;
  //   price: string;
  // } | null>(null);

  return (
    <div id="ProductsArea" className="productsArea">
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
            image1={item.image1}
            image2={item.image2}
            image3={item.image3}
            image4={item.image4}
            image5={item.image5}
            image6={item.image6}
            image7={item.image7}
            price={item.price}
            // onClick={() => setSelectedProduct(item)}
          />
        ))}
      </div>
      {/* {selectedProduct && (
        <ModalProduct
          label={selectedProduct.label}
          productDescriptionTag={selectedProduct.productDescriptionTag}
          productDescriptionGeneral={selectedProduct.productDescriptionGeneral}
          image1={selectedProduct.image1}
          image2={selectedProduct.image2}
          image3={selectedProduct.image3}
          image4={selectedProduct.image4}
          image5={selectedProduct.image5}
          image6={selectedProduct.image6}
          image7={selectedProduct.image7}
          price={selectedProduct.price}
        />
      )} */}
    </div>
  );
}
