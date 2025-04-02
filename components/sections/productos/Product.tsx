"use client"
import { useState } from "react"
import Carousel from "../../ui/Carousel"
import type { ProductProps } from "../../../lib/types"

export default function Product({
  label,
  productDescriptionTag,
  productDescriptionGeneral,
  price,
  images,
  onClick,
}: ProductProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to handle click with current image index
  const handleImageClick = (index?: number) => {
    if (onClick) {
      // Use the provided index or fallback to the current state
      const imageIndex = typeof index === "number" ? index : currentIndex
      onClick(imageIndex)
    }
  }

  return (
    <div className="w-full flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cardGeneral h-full">
      {/* Mantener el aspect ratio alto para la imagen */}
      <div className="aspect-[3/4] w-full">
        <Carousel
          images={images}
          onImageClick={handleImageClick}
          height="h-full"
          showIndicators={true}
          showCounter={true}
          onSlideChange={setCurrentIndex} // Track current index
        />
      </div>

      {/* Contenido simplificado sin texto descriptivo */}
      <div className="cursor-pointer flex flex-col bg-white p-4 sm:p-5 flex-grow" onClick={() => handleImageClick()}>
        <div className="flex flex-col mb-2 w-full">
          <h4 className="font-medium text-base sm:text-lg text-[var(--varCol03)] line-clamp-2">{label}</h4>
          {/* Quitar el precio de aquí */}
        </div>

        <div className="flex flex-wrap gap-1 my-2">
          {productDescriptionTag.split(" ").map((word, index) => (
            <div key={index} className="bg-[var(--varCol02-B)] text-[var(--varCol03)] px-2 py-0.5 rounded-full text-xs">
              {word}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <button className="bg-[var(--varCol02)] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-[var(--varCol03)] hover:shadow-md">
            Ver más
          </button>

          <p className="text-[var(--varCol03)] text-base sm:text-lg font-medium">{price}</p>
        </div>
      </div>
    </div>
  )
}

