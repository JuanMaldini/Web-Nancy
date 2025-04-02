"use client"

import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Carousel from "../../ui/Carousel"
import { getWhatsappContactTaller } from "@/lib/utils"
import type { TallerProp } from "@/lib/types"

export default function CardTaller({
  label,
  tallerDescriptionTag,
  tallerDescriptionGeneral,
  price,
  images,
  videos = [],
  onClick,
}: TallerProp) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to handle click with current image index
  const handleImageClick = (index?: number) => {
    if (onClick) {
      // Use the provided index or fallback to the current state
      const imageIndex = typeof index === "number" ? index : currentIndex
      onClick(imageIndex)
    }
  }

  // Function to handle video click
  const handleVideoClick = (videoIndex: number) => {
    if (onClick) {
      // Calculate the absolute index (images + video index)
      const absoluteIndex = images.length + videoIndex
      onClick(absoluteIndex)
    }
  }

  return (
    <div
      className="w-full max-w-[900px] grid grid-cols-1 sm:grid-cols-[1fr_1.7fr] h-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cardGeneral"
      onClick={() => handleImageClick()}
    >
      <div className="h-[300px] sm:h-full overflow-hidden">
        <Carousel
          images={images}
          videos={videos}
          height="h-full"
          showIndicators={true}
          showCounter={true}
          onImageClick={handleImageClick}
          onVideoClick={handleVideoClick}
          onSlideChange={setCurrentIndex} // Track current index
        />
      </div>
      <div className="flex flex-col p-6 bg-white">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="font-medium text-xl mb-3 text-[var(--varCol03)]">{label}</div>
          </div>
          <div className="flex flex-row flex-wrap justify-start gap-1.5 mb-3">
            {tallerDescriptionTag.split(" ").map((word, index) => (
              <div key={index} className="bg-[var(--varCol02-B)] text-[var(--varCol03)] px-3 py-1 rounded-full text-sm">
                {word}
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-600 mb-4">
            {tallerDescriptionGeneral ||
              "Aprende técnicas creativas en un ambiente relajado y divertido. Taller presencial con todos los materiales incluidos."}
          </div>

          <div className="flex flex-row items-center justify-between gap-4 mt-auto">
            <button className="bg-[var(--varCol02)] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--varCol03)] hover:shadow-md">
              Ver más
            </button>

            <div className="flex items-center gap-2">
              <p className="text-[var(--varCol03)] text-base m-0">{price}</p>
              <a
                className="flex text-[24px] text-[#25D366] transition-all hover:scale-110"
                href={getWhatsappContactTaller(label)}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

