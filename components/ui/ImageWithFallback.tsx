"use client"

import { useState } from "react"
import type { ImageWithFallbackProps } from "../../lib/types"

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className = "",
  width,
  height,
  onClick,
}: ImageWithFallbackProps) {
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

