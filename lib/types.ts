import type React from "react"

// Tipos para datos
export interface Product {
  id?: number
  label: string
  productDescriptionTag: string
  productDescriptionGeneral?: string
  price: string
  images: string[]
}

export interface Taller {
  id?: number
  label: string
  tallerDescriptionTag: string
  tallerDescriptionGeneral?: string
  price: string
  images: string[]
  videos?: string[] // Nuevo campo para videos
  // Campos adicionales para talleres con estructura completa
  title?: string
  description?: string
  date?: string
  time?: string
  location?: string
  tags?: string[]
  image?: string
}

export interface GalleryItem {
  id?: number
  image: string
  category?: string
}

// Tipos para props de componentes
export interface ProductProps extends Product {
  onClick?: (currentIndex?: number) => void
}

export interface TallerProps extends Taller {
  onClick?: (currentIndex?: number) => void
}

export interface GalleryProps {
  imageG: string
  onClick?: () => void
}

// Tipos para componentes UI
export interface CarouselProps {
  images: string[]
  videos?: string[] // Nuevo campo para videos
  onImageClick?: (currentIndex?: number) => void
  onVideoClick?: (videoIndex: number) => void // Nuevo callback para videos
  onSlideChange?: (index: number) => void
  autoplay?: boolean
  interval?: number
  height?: string
  className?: string
  showIndicators?: boolean
  showCounter?: boolean
  showControls?: boolean
  showExpandIcon?: boolean
  fullHeightControls?: boolean
  noHoverEffect?: boolean
}

export interface ImageWithFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
  width?: string | number
  height?: string | number
  onClick?: (e?: React.MouseEvent) => void
}

// Tipos para modales
export interface ModalGalleryProps {
  image: string
  images?: string[]
  videos?: string[] // Añadido para soportar videos
  initialIndex?: number
  onClose: (e?: React.MouseEvent) => void
}

export interface ModalVideoProps {
  videoSrc: string
  onClose: (e?: React.MouseEvent) => void
}

export interface ModalProductProps extends Product {
  initialImageIndex?: number
  onClose: () => void
}

export interface ModalTallerProps extends Taller {
  initialImageIndex?: number
  onClose?: () => void
}

// Tipos para áreas
export interface ProductsAreaProps {
  products?: Product[]
}

export interface TallerAreaProps {
  talleres?: Taller[]
}

export interface GalleryAreaProps {
  galleryItems?: GalleryItem[]
}

export interface TallerProp extends Taller {
  onClick?: (currentIndex?: number) => void
}

