"use client"

import { useState } from "react"
import Product from "./Product"
import Spacebar from "../Spacebar/Spacebar"
import { productsText } from "../A-Helpers/Helper"
import ModalProduct from "../Modal/ModalProduct"

export default function ProductsArea() {
  const [selectedProduct, setSelectedProduct] = useState<{
    label: string
    productDescriptionTag: string
    productDescriptionGeneral?: string
    images: string[]
    price: string
  } | null>(null)

  // Datos de productos con placeholders (limitados a 3 imágenes)
  const placeholderProducts = [
    {
      label: "Almohadillas",
      productDescriptionGeneral:
        "Están confeccionadas a mano, rellenas de semillas, flores de lavanda y aceites esenciales; miden 38 cm de largo x 12 cm de ancho, pesan 550 grs, y están diseñadas con propósito terapéutico para tratar dolores, inflamación, contracturas y relajación, siendo ideales para usar en cualquier zona del cuerpo.",
      productDescriptionTag: "almohadillas terapéutico",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=310&width=410",
        "/placeholder.svg?height=320&width=420",
      ],
      price: "$10.000",
    },
  ]

  return (
    <div
      id="ProductsArea"
      className="bg-[var(--varColWhite3)] flex flex-col justify-center items-center py-16 min-h-screen"
    >
      <div className="spacingArea max-w-6xl w-full">
        <div className="text-center mb-8">
          <p className="text-2xl font-medium text-[var(--varCol03)] mb-2">Productos</p>
          <p className="text-base text-gray-600 max-w-xl mx-auto">{productsText}</p>
        </div>
        <Spacebar />
        <div className="flex flex-wrap items-stretch justify-center my-10 gap-8">
          {placeholderProducts.map((item, index) => (
            <Product
              key={index}
              label={item.label}
              productDescriptionTag={item.productDescriptionTag}
              productDescriptionGeneral={item.productDescriptionGeneral}
              images={item.images}
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
            images={selectedProduct.images}
            price={selectedProduct.price}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  )
}

