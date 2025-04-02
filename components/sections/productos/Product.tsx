"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import type React from "react"

import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import type { ProductProps, CarouselProps } from "../../../lib/types"

// Componente ImageWithFallback integrado
function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className = "",
  width,
  height,
  onClick,
}: {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
  width?: string | number
  height?: string | number
  onClick?: (e?: React.MouseEvent) => void
}) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <img
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      className={`${className} ${isLoading ? "bg-gray-200" : ""}`}
      width={width}
      height={height}
      onClick={onClick}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setImgSrc(fallbackSrc)
        setIsLoading(false)
      }}
    />
  )
}

// Función para verificar si un archivo es un video
function isVideo(filename: string): boolean {
  if (!filename) return false
  const extension = filename.split(".").pop()?.toLowerCase()
  return extension === "mp4" || extension === "mov" || extension === "webm"
}

// Componente Carousel integrado
function Carousel({
  images,
  videos = [],
  onImageClick,
  onVideoClick,
  onSlideChange,
  autoplay = false,
  interval = 5000,
  height = "h-[220px]",
  className = "",
  showIndicators = true,
  showCounter = false,
  showControls = true,
  showExpandIcon = false,
  fullHeightControls = false,
  noHoverEffect = false,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  // Combinar imágenes y videos para la navegación
  const allMedia = [...images, ...videos]

  // Cargar los videos para generar las vistas previas
  useEffect(() => {
    videos.forEach((videoSrc) => {
      if (videoRefs.current[videoSrc]) {
        const video = videoRefs.current[videoSrc]
        if (video) {
          // Establecer el tiempo a 0.1 segundos para cargar el primer frame
          video.currentTime = 0.1
        }
      }
    })
  }, [videos])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === allMedia.length - 1 ? 0 : prevIndex + 1
      if (onSlideChange) onSlideChange(newIndex)
      return newIndex
    })
  }, [allMedia.length, onSlideChange])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? allMedia.length - 1 : prevIndex - 1
      if (onSlideChange) onSlideChange(newIndex)
      return newIndex
    })
  }, [allMedia.length, onSlideChange])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    if (onSlideChange) onSlideChange(index)
  }

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [autoplay, interval, nextSlide])

  // Notify parent of initial slide index
  useEffect(() => {
    if (onSlideChange) onSlideChange(currentIndex)
  }, [])

  if (allMedia.length === 0) return null

  // Verificar si el elemento actual es un video
  const currentMediaIsVideo = isVideo(allMedia[currentIndex])

  // Manejar clic en el medio del carrusel
  const handleCentralClick = () => {
    const currentMedia = allMedia[currentIndex]

    if (isVideo(currentMedia)) {
      // Si es un video, llamar al manejador de videos
      if (onVideoClick) {
        const videoIndex = videos.indexOf(currentMedia)
        if (videoIndex !== -1) {
          onVideoClick(videoIndex)
        }
      }
    } else {
      // Si es una imagen, llamar al manejador de imágenes
      if (onImageClick) {
        const imageIndex = images.indexOf(currentMedia)
        if (imageIndex !== -1) {
          onImageClick(imageIndex)
        } else {
          onImageClick(currentIndex)
        }
      }
    }
  }

  return (
    <div className={`relative overflow-hidden bg-white ${height} ${className} w-full`}>
      {/* Cargar videos ocultos para generar vistas previas */}
      <div className="hidden">
        {videos.map((videoSrc, idx) => (
          <video
            key={`video-preload-${idx}`}
            ref={(el) => {
              videoRefs.current[videoSrc] = el
            }}
            src={videoSrc}
            preload="metadata"
          />
        ))}
      </div>

      {/* Imágenes y videos */}
      {allMedia.map((media, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {isVideo(media) ? (
            <div className="relative w-full h-full">
              {/* Video como fondo (solo para vista previa) */}
              <video
                src={media}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => handleCentralClick()}
                preload="metadata"
                muted
                playsInline
              />

              {/* Icono de reproducción para videos */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20">
                <div className="bg-white/80 rounded-full p-3 shadow-lg">
                  <Play size={24} className="text-gray-800" />
                </div>
              </div>
            </div>
          ) : (
            <ImageWithFallback
              src={media || "/placeholder.svg"}
              fallbackSrc="/placeholder.svg?height=400&width=300"
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handleCentralClick()}
            />
          )}
        </div>
      ))}

      {/* Indicadores (esferitas) - con manejo de overflow */}
      {showIndicators && allMedia.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center z-20 px-2 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-1.5 max-w-full">
            {allMedia.map((media, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
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
        </div>
      )}

      {/* Controles de navegación mejorados */}
      {showControls && allMedia.length > 1 && (
        <>
          {/* Botón anterior - ahora con hover individual */}
          <button
            className="absolute top-0 left-0 z-20 h-full w-[20%] flex items-center justify-start group"
            onClick={(e) => {
              e.stopPropagation()
              prevSlide()
            }}
          >
            <div className="flex items-center px-2 h-full transition-all duration-300">
              {/* Fondo que solo aparece en hover sobre este botón específico */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Icono siempre visible */}
              <ChevronLeft size={24} className="text-white drop-shadow-md relative z-10" />
            </div>
          </button>

          {/* Botón siguiente - ahora con hover individual */}
          <button
            className="absolute top-0 right-0 z-20 h-full w-[20%] flex items-center justify-end group"
            onClick={(e) => {
              e.stopPropagation()
              nextSlide()
            }}
          >
            <div className="flex items-center px-2 h-full transition-all duration-300">
              {/* Fondo que solo aparece en hover sobre este botón específico */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Icono siempre visible */}
              <ChevronRight size={24} className="text-white drop-shadow-md relative z-10" />
            </div>
          </button>

          {/* Área central para abrir el modal */}
          <div
            className="absolute top-0 left-[20%] right-[20%] h-full z-10 cursor-pointer"
            onClick={handleCentralClick}
          />
        </>
      )}

      {/* Contador de imágenes */}
      {showCounter && allMedia.length > 1 && (
        <div className="absolute top-3 left-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs z-20">
          {currentIndex + 1} / {allMedia.length}
        </div>
      )}
    </div>
  )
}

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

