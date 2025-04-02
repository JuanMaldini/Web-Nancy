import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { imageMap, contactInfo } from "./helpers"

// Función para obtener una imagen del mapa con fallback
export const getImage = (key: string, fallbackWidth = 400, fallbackHeight = 300): string => {
  return imageMap[key] || `/placeholder.svg?height=${fallbackHeight}&width=${fallbackWidth}`
}

// Funciones de contacto
export const getWhatsappContactProduct = (label: string) => {
  const WelcomeText = `Hola Nancy, un gusto. Estaba revisando su web y me gustaría más información sobre el producto que se llama "${label}", Gracias!.`
  const WelcomeTextF = encodeURIComponent(WelcomeText)
  return `http://wa.me/${contactInfo.celular}?text=${WelcomeTextF}`
}

export const getWhatsappContactTaller = (label: string) => {
  const WelcomeText = `Hola Nancy, un gusto. Estaba revisando su web y me gustaría más información sobre el curso que se llama "${label}", Gracias!.`
  const WelcomeTextF = encodeURIComponent(WelcomeText)
  return `http://wa.me/${contactInfo.celular}?text=${WelcomeTextF}`
}

export const getWhatsappContact = () => {
  const ContactText = `Hola Nancy, espero que se encuentre bien. Me estoy contactando desde la página web.`
  const ContactTextF = encodeURIComponent(ContactText)
  return `http://wa.me/${contactInfo.celular}?text=${ContactTextF}`
}

export const getPhoneContact = () => {
  return `tel:+${contactInfo.celular}`
}

// Export Instagram link
export const InstagramLink = contactInfo.instagram
export const EmailLink = contactInfo.email

// Utility function for class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para verificar si un archivo es un video
export function isVideo(filename: string): boolean {
  if (!filename) return false
  const extension = filename.split(".").pop()?.toLowerCase()
  return extension === "mp4" || extension === "mov" || extension === "webm"
}

// Función para obtener una imagen de vista previa para un video
export function getVideoThumbnail(videoSrc: string): string {
  // En un caso real, podrías generar thumbnails del video
  // Por ahora, usamos un placeholder con un icono de play
  return `/placeholder.svg?height=400&width=300`
}

