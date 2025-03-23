"use client"

import { useState } from "react"
import Gallery from "./Gallery"
import ModalGallery from "../Modal/ModalGallery"
import Spacebar from "../Spacebar/Spacebar"
import { galleryText } from "../A-Helpers/Helper"

export default function GalleryArea() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Crear un array de placeholders para la galería (limitado a 12 imágenes para 3 filas de 4)
  const placeholderImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=310&width=410",
    "/placeholder.svg?height=320&width=420",
    "/placeholder.svg?height=330&width=430",
    "/placeholder.svg?height=340&width=440",
    "/placeholder.svg?height=350&width=450",
    "/placeholder.svg?height=360&width=460",
    "/placeholder.svg?height=370&width=470",
    "/placeholder.svg?height=380&width=480",
    "/placeholder.svg?height=390&width=490",
    "/placeholder.svg?height=400&width=500",
    "/placeholder.svg?height=410&width=510",
  ]

  return (
    <div className="flex flex-col items-center bg-[var(--varColWhite3)] mx-4 py-10" id="GalleryArea">
      <div className="bg-[var(--varColWhite3)] flex flex-col items-center rounded-3xl p-10 w-full max-w-[1200px] shadow-md">
        <div className="text-center">
          <p className="section-title">Galería</p>
          <p className="section-subtitle">{galleryText}</p>
        </div>
        <Spacebar />
        <div className="rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 justify-center gap-5">
          {placeholderImages.map((image, index) => (
            <Gallery key={index} imageG={image} onClick={() => setSelectedImage(image)} />
          ))}
        </div>
      </div>
      {selectedImage && <ModalGallery image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}

