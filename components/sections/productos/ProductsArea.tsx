"use client"

import { useState } from "react"
import Product from "./Product"
import Spacebar from "@/components/ui/Spacebar"
import ModalProduct from "@/components/modals/ModalProduct"
import { productsText, products } from "@/lib/helpers"
import type { Product as ProductType } from "@/lib/types"

export default function ProductsArea() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const [initialImageIndex, setInitialImageIndex] = useState<number>(0)

  const handleProductClick = (product: ProductType, index = 0) => {
    setSelectedProduct(product)
    setInitialImageIndex(index)
  }

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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 my-10 px-4 auto-rows-fr">
          {products.map((item, index) => (
            <Product key={index} {...item} onClick={(currentIndex) => handleProductClick(item, currentIndex)} />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ModalProduct
          {...selectedProduct}
          initialImageIndex={initialImageIndex}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}

