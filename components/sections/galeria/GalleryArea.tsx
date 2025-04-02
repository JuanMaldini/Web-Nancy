"use client"

import { useState } from "react"
import Gallery from "./Gallery"
import ModalGallery from "@/components/modals/ModalGallery"
import Spacebar from "@/components/ui/Spacebar"
import { galleryText, galleryItems } from "@/lib/helpers"

export default function GalleryArea() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center bg-[var(--varColWhite3)] mx-4 py-10" id="GalleryArea">
      <div className="bg-[var(--varColWhite3)] flex flex-col items-center rounded-3xl p-10 w-full max-w-[1200px] shadow-md">
        <div className="text-center">
          <p className="section-title">Galería</p>
          <p className="section-subtitle">{galleryText}</p>
        </div>
        <Spacebar />
        <div className="rounded-3xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 my-8 justify-center gap-3 sm:gap-4 md:gap-5">
          {galleryItems.map((item, index) => (
            <Gallery key={index} imageG={item.image} onClick={() => setSelectedImage(item.image)} />
          ))}
        </div>
      </div>
      {selectedImage && <ModalGallery image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}

