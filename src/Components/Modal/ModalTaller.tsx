"use client"

import type React from "react"

import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { getWhatsappContactTaller } from "../A-Helpers/Helper"
import ModalGallery from "./ModalGallery"
import Carousel from "../Carousel"

interface ModalProps {
  label: string
  tallerDescriptionTag: string
  tallerDescriptionGeneral?: string
  images: string[]
  price: string
  onClose?: () => void
}

const ModalTaller = ({ label, tallerDescriptionTag, tallerDescriptionGeneral, images, price, onClose }: ModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Función para detener la propagación de eventos
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
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
          <div className="relative group">
            <Carousel
              images={images}
              onImageClick={(image) => setSelectedImage(image)}
              height="h-[320px]"
              showExpandIcon={false}
              showIndicators={true}
              showControls={true}
              showCounter={true}
              fullHeightControls={true}
              noHoverEffect={true}
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

      {selectedImage && (
        <ModalGallery
          image={selectedImage}
          images={images}
          onClose={(e) => {
            e?.stopPropagation()
            setSelectedImage(null)
          }}
        />
      )}
    </div>
  )
}

export default ModalTaller

