"use client"

import ImageWithFallback from "@/components/ui/ImageWithFallback"
import type { GalleryProps } from "@/lib/types"

export default function Gallery({ imageG, onClick }: GalleryProps) {
  return (
    <div className="aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cardGeneral">
      <ImageWithFallback
        src={imageG || "/placeholder.svg"}
        fallbackSrc="/placeholder.svg?height=400&width=300"
        alt="Gallery item"
        onClick={onClick}
        className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      />
    </div>
  )
}

