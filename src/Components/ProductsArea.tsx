import Product from "./Product.tsx"
import ABarrelProducts from "./ABarrelProducts.tsx"

type Props = {}

export default function ProductsArea({}: Props) {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="d-flex flex-row align-items-center">

          <Product
          Id={1}
          productName="Nombre de Producto" 
          image1=""
          image2=""
          price="10.000"
          productPath=""
          />

          <Product
          Id={1}
          productName="Nombre de Producto" 
          image1=""
          image2=""
          price="10.000"
          productPath=""
          />

          <Product
          Id={1}
          productName="Nombre de Producto" 
          image1=""
          image2=""
          price="10.000"
          productPath=""
          />

          <Product
          Id={1}
          productName="Nombre de Producto" 
          image1=""
          image2=""
          price="10.000"
          productPath=""
          />


        </div>
      </div>
    </div>
  )
}