"use client"

import type React from "react"

interface GalleryAreaProps {
  images: string[]
  setSelectedImage: (image: string | null) => void
}

const GalleryArea: React.FC<GalleryAreaProps> = ({ images, setSelectedImage }) => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image || "/placeholder.svg"}
          alt={`Gallery item ${index + 1}`}
          className="w-[150px] h-[220px] sm:w-[170px] sm:h-[240px] md:w-[200px] md:h-[290px] lg:w-[220px] lg:h-[320px] xl:w-[250px] xl:h-[360px] object-cover rounded-lg m-2 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] cardGeneral"
          onClick={() => setSelectedImage(image)}
        />
      ))}
    </div>
  )
}

export default GalleryArea

