"use client"

import { FaWhatsapp } from "react-icons/fa"
import { getWhatsappContactProduct } from "../A-Helpers/Helper"
import Carousel from "../Carousel"

export type ProductProps = {
  label: string
  productDescriptionTag: string
  productDescriptionGeneral?: string
  price: string
  images: string[]
  onClick?: () => void
}

export default function Product({
  label,
  productDescriptionTag,
  productDescriptionGeneral,
  price,
  images,
  onClick,
}: ProductProps) {
  return (
    <div className="w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white cardGeneral">
      <Carousel
        images={images}
        onImageClick={onClick}
        showIndicators={true}
        showControls={true}
        showCounter={false}
        fullHeightControls={true}
        noHoverEffect={true}
      />

      <div className="cursor-pointer flex flex-col h-full border-none bg-white p-5" onClick={onClick}>
        <div>
          <h4 className="font-medium text-lg mb-2 text-[var(--varCol03)]">{label}</h4>
        </div>

        <div className="flex flex-wrap gap-1.5 my-2">
          {productDescriptionTag.split(" ").map((word, index) => (
            <div key={index} className="bg-[var(--varCol02-B)] text-[var(--varCol03)] px-3 py-1 rounded-full text-xs">
              {word}
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-600 mb-2">
          {productDescriptionGeneral
            ? productDescriptionGeneral.substring(0, 80) + "..."
            : "Producto artesanal de alta calidad..."}
        </div>

        <div className="flex items-center justify-between gap-3 mt-auto pt-3">
          <button className="bg-[var(--varCol02)] text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--varCol03)] hover:shadow-md">
            Ver más
          </button>

          <div className="flex items-center gap-2">
            <p className="text-[var(--varCol03)] text-base m-0">{price}</p>
            <a
              className="flex text-[24px] text-[#25D366] transition-all hover:scale-110"
              href={getWhatsappContactProduct(label)}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

