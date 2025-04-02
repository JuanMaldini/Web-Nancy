"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { IoClose } from "react-icons/io5"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Play, Pause } from "lucide-react"
import type { ModalGalleryProps } from "../../lib/types"
import ImageWithFallback from "../ui/ImageWithFallback"
import { isVideo } from "../../lib/utils"

const ModalGallery = ({ image, images, videos = [], initialIndex = 0, onClose }: ModalGalleryProps) => {
  // Combinar imágenes y videos
  const allMedia = [...(images || []), ...(videos || [])]

  // Si solo tenemos una imagen y no se proporcionó un array, usarla
  if (allMedia.length === 0 && image) {
    allMedia.push(image)
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Siempre inicializar con 0 para simplificar
  useEffect(() => {
    setCurrentIndex(0)
    setIsPlaying(false)
  }, [image, images, videos])

  const hasMultipleMedia = allMedia.length > 1
  const currentMediaIsVideo = isVideo(allMedia[currentIndex])

  // Navegar a la imagen/video anterior
  const prevMedia = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (hasMultipleMedia) {
      // Pausar video actual si está reproduciéndose
      if (currentMediaIsVideo && videoRef.current) {
        videoRef.current.pause()
        setIsPlaying(false)
      }

      setCurrentIndex((prevIndex) => (prevIndex <= 0 ? allMedia.length - 1 : prevIndex - 1))
    }
  }

  // Navegar a la imagen/video siguiente
  const nextMedia = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (hasMultipleMedia) {
      // Pausar video actual si está reproduciéndose
      if (currentMediaIsVideo && videoRef.current) {
        videoRef.current.pause()
        setIsPlaying(false)
      }

      setCurrentIndex((prevIndex) => (prevIndex >= allMedia.length - 1 ? 0 : prevIndex + 1))
    }
  }

  // Ir a una diapositiva específica
  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()

    // Pausar video actual si está reproduciéndose
    if (currentMediaIsVideo && videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }

    setCurrentIndex(index)
  }

  // Manejar navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevMedia()
      } else if (e.key === "ArrowRight") {
        nextMedia()
      } else if (e.key === "Escape") {
        handleClose()
      } else if (e.key === " " && currentMediaIsVideo) {
        // Espacio para reproducir/pausar video
        toggleVideo()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, currentMediaIsVideo]) // Ahora necesitamos estas dependencias

  // Detener la propagación solo en la imagen/video
  const handleMediaClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()

    // Si es un video, reproducir/pausar
    if (currentMediaIsVideo) {
      toggleVideo()
    }
  }

  // Función para reproducir/pausar video
  const toggleVideo = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch((err) => {
        console.error("Error al reproducir el video:", err)
      })
    }

    setIsPlaying(!isPlaying)
  }

  // Manejar cuando el video termina
  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  // Función para manejar el cierre del modal
  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation() // Detener la propagación para evitar que se cierre el modal principal
      e.preventDefault() // Prevenir el comportamiento por defecto
    }

    // Llamar a la función onClose proporcionada por el componente padre
    if (onClose) {
      // Crear un nuevo evento sintético si no se proporciona uno
      const syntheticEvent =
        e ||
        ({
          stopPropagation: () => {},
          preventDefault: () => {},
        } as React.MouseEvent)

      onClose(syntheticEvent)
    }
  }

  // Función para manejar clics en el fondo del modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Solo cerrar si se hace clic directamente en el fondo (no en los controles o la imagen)
    if (e.target === modalRef.current) {
      handleClose(e)
    }
  }

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[1100]"
      onClick={handleBackdropClick} // Usar la nueva función para manejar clics en el fondo
    >
      <button
        className="modal-close-btn"
        onClick={handleClose} // Usar la función handleClose
        aria-label="Cerrar galería"
      >
        <IoClose size={24} className="text-gray-700" />
      </button>

      {/* Contenedor para las imágenes/videos con transición */}
      <div
        className="relative w-full max-w-4xl h-[80vh] flex justify-center items-center"
        onClick={(e) => e.stopPropagation()} // Detener propagación en el contenedor principal
      >
        {allMedia.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {isVideo(src) ? (
              <div className="relative max-w-full max-h-[80vh]">
                <video
                  ref={index === currentIndex ? videoRef : null}
                  src={src}
                  className="max-w-full max-h-[80vh] object-contain shadow-lg"
                  onClick={handleMediaClick}
                  onEnded={handleVideoEnded}
                  controls={false}
                  playsInline
                  preload="metadata"
                />

                {/* Botón de reproducción/pausa superpuesto */}
                {index === currentIndex && (
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
                    onClick={toggleVideo}
                  >
                    <div className="bg-white/80 rounded-full p-4 transition-transform hover:scale-110">
                      {isPlaying ? (
                        <Pause size={32} className="text-gray-800" />
                      ) : (
                        <Play size={32} className="text-gray-800" />
                      )}
                    </div>
                  </button>
                )}
              </div>
            ) : (
              <ImageWithFallback
                src={src || "/placeholder.svg"}
                fallbackSrc="/placeholder.svg?height=400&width=300"
                className="max-w-full max-h-[80vh] object-contain shadow-lg"
                alt={`Imagen ampliada ${index + 1}`}
                onClick={handleMediaClick}
              />
            )}
          </div>
        ))}
      </div>

      {/* Controles de navegación - solo visibles si hay múltiples medios */}
      {hasMultipleMedia && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full z-[1110] transition-all duration-300 hover:bg-white"
            onClick={prevMedia}
          >
            <FaChevronLeft size={16} className="text-gray-700" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full z-[1110] transition-all duration-300 hover:bg-white"
            onClick={nextMedia}
          >
            <FaChevronRight size={16} className="text-gray-700" />
          </button>

          {/* Contador de medios */}
          <div
            className="absolute top-4 left-4 bg-white/70 px-2 py-1 rounded-full text-xs text-gray-700 z-[1110]"
            onClick={(e) => e.stopPropagation()}
          >
            {currentIndex + 1} / {allMedia.length}
          </div>

          {/* Indicadores (esferitas) */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-[1110] flex-wrap justify-center max-w-[80%] px-2"
            onClick={(e) => e.stopPropagation()}
          >
            {allMedia.map((media, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${
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

