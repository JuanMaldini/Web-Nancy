"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { IoClose } from "react-icons/io5"
import { Play } from "lucide-react"
import type { ModalVideoProps } from "@/lib/types"

const ModalVideo = ({ videoSrc, onClose }: ModalVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isEnded, setIsEnded] = useState(false)

  // Función para detener la propagación de eventos
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Función para reproducir el video
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsEnded(false)
    }
  }

  // Función para manejar cuando el video termina
  const handleVideoEnded = () => {
    setIsEnded(true)
  }

  // Reproducir automáticamente cuando se monta el componente
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video automáticamente:", error)
      })
    }
  }, [])

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[1100]"
      onClick={onClose}
    >
      <button
        className="modal-close-btn"
        onClick={(e) => {
          e.stopPropagation()
          onClose(e)
        }}
      >
        <IoClose size={24} className="text-gray-700" />
      </button>

      <div className="relative max-w-4xl w-full max-h-[80vh]" onClick={handleModalClick}>
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-auto max-h-[80vh] rounded-lg"
          controls={false}
          onEnded={handleVideoEnded}
        />

        {isEnded && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg"
            onClick={handlePlayVideo}
          >
            <div className="bg-white/80 rounded-full p-4 transition-transform hover:scale-110">
              <Play size={32} className="text-gray-800" />
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default ModalVideo

