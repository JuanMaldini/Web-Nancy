"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { IoClose } from "react-icons/io5"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface ModalProps {
  image: string
  images?: string[]
  onClose: (e?: React.MouseEvent) => void
}

const ModalGallery = ({ image, images, onClose }: ModalProps) => {
  const [currentImage, setCurrentImage] = useState<string>(image)

  // Si se proporciona un array de imágenes, úsalo; de lo contrario, crea un array con la imagen única
  // Limitar a un máximo de 3 imágenes
  const imageArray = images && images.length > 0 ? images.slice(0, 3) : [image]

  const hasMultipleImages = imageArray.length > 1
  const currentIndex = imageArray.indexOf(currentImage)

  // Navegar a la imagen anterior
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (hasMultipleImages) {
      const newIndex = currentIndex <= 0 ? imageArray.length - 1 : currentIndex - 1
      setCurrentImage(imageArray[newIndex])
    }
  }

  // Navegar a la siguiente imagen
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (hasMultipleImages) {
      const newIndex = currentIndex >= imageArray.length - 1 ? 0 : currentIndex + 1
      setCurrentImage(imageArray[newIndex])
    }
  }

  // Ir a una diapositiva específica
  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage(imageArray[index])
  }

  // Manejar navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage(e as unknown as React.MouseEvent)
      } else if (e.key === "ArrowRight") {
        nextImage(e as unknown as React.MouseEvent)
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  // Detener la propagación solo en la imagen
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[1100]"
      onClick={onClose} // Cierra el modal al hacer clic en cualquier parte
    >
      <button
        className="modal-close-btn"
        onClick={(e) => {
          e.stopPropagation()
          onClose(e)
        }}
      >
        <IoClose size={24} className="text-gray-700" />
      </button>

      {/* Solo la imagen detiene la propagación */}
      <img
        src={currentImage || "/placeholder.svg"}
        className="max-w-full max-h-[80vh] object-contain shadow-lg"
        alt="Imagen ampliada"
        onClick={handleImageClick}
      />

      {/* Controles de navegación - solo visibles si hay múltiples imágenes */}
      {hasMultipleImages && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full z-[1110] transition-all duration-300 hover:bg-white"
            onClick={prevImage}
          >
            <FaChevronLeft size={16} className="text-gray-700" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full z-[1110] transition-all duration-300 hover:bg-white"
            onClick={nextImage}
          >
            <FaChevronRight size={16} className="text-gray-700" />
          </button>

          {/* Contador de imágenes */}
          <div
            className="absolute top-4 left-4 bg-white/70 px-2 py-1 rounded-full text-xs text-gray-700 z-[1110]"
            onClick={(e) => e.stopPropagation()}
          >
            {currentIndex + 1} / {imageArray.length}
          </div>

          {/* Indicadores (esferitas) */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-[1110]"
            onClick={(e) => e.stopPropagation()}
          >
            {imageArray.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-4" : "bg-white/50"
                }`}
                onClick={(e) => goToSlide(index, e)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ModalGallery

