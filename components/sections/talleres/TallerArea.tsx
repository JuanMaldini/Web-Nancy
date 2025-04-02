"use client"

import { useState } from "react"
import CardTaller from "./CardTaller"
import Spacebar from "@/components/ui/Spacebar"
import ModalTaller from "@/components/modals/ModalTaller"
import { talleresText, talleres } from "@/lib/helpers"
import type { Taller } from "@/lib/types"

export default function TallerArea() {
  const [selectedTaller, setSelectedTaller] = useState<Taller | null>(null)
  const [initialImageIndex, setInitialImageIndex] = useState<number>(0)

  const handleTallerClick = (taller: Taller, index = 0) => {
    setSelectedTaller(taller)
    setInitialImageIndex(index)
  }

  return (
    <div
      id="CursosArea"
      className="bg-[var(--varColWhite3)] flex flex-col justify-center items-center py-16 min-h-screen"
    >
      <div className="spacingArea max-w-6xl w-full">
        <div className="text-center mb-8">
          <p className="text-2xl font-medium text-[var(--varCol03)] mb-2">Talleres</p>
          <p className="text-base text-gray-600 max-w-xl mx-auto">{talleresText}</p>
        </div>
        <Spacebar />
        <div className="flex flex-col items-center gap-8 my-10 px-4">
          {talleres.map((item, index) => (
            <CardTaller key={index} {...item} onClick={(currentIndex) => handleTallerClick(item, currentIndex)} />
          ))}
        </div>
      </div>
      {selectedTaller && (
        <ModalTaller
          {...selectedTaller}
          initialImageIndex={initialImageIndex}
          onClose={() => setSelectedTaller(null)}
        />
      )}
    </div>
  )
}

