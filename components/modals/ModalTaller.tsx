"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import ModalGallery from "./ModalGallery"
import ModalVideo from "./ModalVideo"
import Carousel from "../ui/Carousel"
import { getWhatsappContactTaller, isVideo } from "@/lib/utils"
import type { ModalTallerProps } from "@/lib/types"

const ModalTaller = ({
  label,
  tallerDescriptionTag,
  tallerDescriptionGeneral,
  images,
  videos = [],
  price,
  initialImageIndex = 0,
  onClose,
}: ModalTallerProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(initialImageIndex)

  // Combinar imágenes y videos para la navegación
  const allMedia = [...images, ...videos]

  // Set initial carousel index when component mounts or initialImageIndex changes
  useEffect(() => {
    setCurrentImageIndex(initialImageIndex)
  }, [initialImageIndex])

  // Función para detener la propagación de eventos
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Función para abrir la galería modal con todos los medios
  const handleImageClick = (index: number = currentImageIndex) => {
    const currentMedia = allMedia[index]

    if (currentMedia) {
      if (isVideo(currentMedia)) {
        // Si es un video, abrimos el modal de video
        setSelectedVideo(currentMedia)
      } else {
        // Si es una imagen, abrimos el modal de galería con todas las imágenes y videos
        setSelectedImage(currentMedia)
        setShowGalleryModal(true)
      }
    }
  }

  // Función para abrir el modal de video
  const handleVideoClick = (videoIndex: number) => {
    if (videos && videos.length > videoIndex) {
      setSelectedVideo(videos[videoIndex])
    }
  }

  // Función para cerrar solo el modal de galería
  const handleGalleryClose = () => {
    setShowGalleryModal(false)
    setSelectedImage(null)
  }

  // Función para cerrar solo el modal de video
  const handleVideoClose = () => {
    setSelectedVideo(null)
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[1000] overflow-hidden"
      onClick={onClose}
    >
      <div className="relative w-[90%] max-w-[550px]" onClick={handleModalClick}>
        <button
          className="modal-close-btn"
          onClick={(e) => {
            e.stopPropagation()
            onClose && onClose()
          }}
        >
          <IoClose size={24} className="text-gray-700" />
        </button>

        <div className="flex flex-col rounded-lg overflow-hidden shadow-xl bg-white">
          <div className="h-[320px]">
            <Carousel
              images={images}
              videos={videos}
              onImageClick={handleImageClick}
              onVideoClick={handleVideoClick}
              onSlideChange={setCurrentImageIndex}
              height="h-full"
              showIndicators={true}
              showCounter={true}
            />
          </div>

          <div className="p-6 flex flex-col gap-3">
            <div>
              <h2 className="text-xl font-medium mb-2 text-[var(--varCol03)]">{label}</h2>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tallerDescriptionTag.split(" ").map((word, index) => (
                <div
                  key={index}
                  className="bg-[var(--varCol02-B)] text-[var(--varCol03)] px-3 py-1 rounded-full text-sm"
                >
                  {word}
                </div>
              ))}
            </div>

            <div className="leading-relaxed text-gray-700 my-2 text-base">
              <p>{tallerDescriptionGeneral}</p>
            </div>

            <div className="flex items-center justify-between gap-4 mt-3">
              <a
                className="flex items-center gap-2 bg-[var(--varCol02)] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--varCol03)] hover:shadow-md"
                href={getWhatsappContactTaller(label)}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp <FaWhatsapp />
              </a>

              <div className="text-[var(--varCol03)] text-base">
                <p className="m-0">{price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showGalleryModal && (
        <ModalGallery image={selectedImage || ""} images={images} videos={videos} onClose={handleGalleryClose} />
      )}

      {selectedVideo && <ModalVideo videoSrc={selectedVideo} onClose={handleVideoClose} />}
    </div>
  )
}

export default ModalTaller

