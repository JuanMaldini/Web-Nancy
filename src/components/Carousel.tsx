"use client"

import { useState, useEffect, useCallback } from "react"
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa"

interface CarouselProps {
  images: string[]
  onImageClick?: (image: string) => void
  autoplay?: boolean
  interval?: number
  height?: string
  className?: string
  showExpandIcon?: boolean
  showIndicators?: boolean
  showControls?: boolean
  showCounter?: boolean
  fullHeightControls?: boolean
  noHoverEffect?: boolean
}

export default function Carousel({
  images,
  onImageClick,
  autoplay = false,
  interval = 5000,
  height = "h-[220px]",
  className = "",
  showExpandIcon = false,
  showIndicators = false,
  showControls = true,
  showCounter = false,
  fullHeightControls = false,
  noHoverEffect = false,
}: CarouselProps) {
  // Limitar a un máximo de 3 imágenes
  const limitedImages = images.slice(0, 3)

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === limitedImages.length - 1 ? 0 : prevIndex + 1))
  }, [limitedImages.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? limitedImages.length - 1 : prevIndex - 1))
  }, [limitedImages.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [autoplay, interval, nextSlide])

  if (limitedImages.length === 0) return null

  return (
    <div className={`relative overflow-hidden bg-white ${height} ${className}`}>
      {limitedImages.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => onImageClick && onImageClick(image)}
          />

          {showExpandIcon && onImageClick && (
            <div
              className="absolute top-2 right-2 bg-white/70 rounded-full p-1.5 cursor-pointer z-20"
              onClick={(e) => {
                e.stopPropagation()
                onImageClick(image)
              }}
            >
              <FaExpand className="text-gray-700 text-xs" />
            </div>
          )}
        </div>
      ))}

      {/* Indicadores (esferitas) */}
      {showIndicators && limitedImages.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {limitedImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[var(--varCol03)] w-3" : "bg-white/70"
              }`}
              onClick={(e) => {
                e.stopPropagation()
                goToSlide(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Controles de navegación - Ahora siempre centrados verticalmente y ocupando todo el alto */}
      {showControls && limitedImages.length > 1 && (
        <>
          <button
            className={`absolute top-0 left-0 z-20 h-full w-[15%] flex items-center justify-center ${noHoverEffect ? "" : "hover:bg-white/20"} transition-all duration-300`}
            onClick={(e) => {
              e.stopPropagation()
              prevSlide()
            }}
          >
            <div
              className={`bg-white/70 p-1.5 ${noHoverEffect ? "" : "opacity-70 hover:opacity-100"} transition-opacity`}
            >
              <FaChevronLeft className="text-gray-700 text-xs" />
            </div>
          </button>

          <button
            className={`absolute top-0 right-0 z-20 h-full w-[15%] flex items-center justify-center ${noHoverEffect ? "" : "hover:bg-white/20"} transition-all duration-300`}
            onClick={(e) => {
              e.stopPropagation()
              nextSlide()
            }}
          >
            <div
              className={`bg-white/70 p-1.5 ${noHoverEffect ? "" : "opacity-70 hover:opacity-100"} transition-opacity`}
            >
              <FaChevronRight className="text-gray-700 text-xs" />
            </div>
          </button>
        </>
      )}

      {/* Contador de imágenes */}
      {showCounter && limitedImages.length > 1 && (
        <div className="absolute top-2 left-2 bg-white/70 px-2 py-0.5 rounded-full text-xs text-gray-700 z-20">
          {currentIndex + 1} / {limitedImages.length}
        </div>
      )}
    </div>
  )
}

