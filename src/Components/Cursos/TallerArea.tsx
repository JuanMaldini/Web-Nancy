"use client"

import { useState } from "react"
import CardTaller from "./CardTaller"
import Spacebar from "../Spacebar/Spacebar"
import { talleresText } from "../A-Helpers/Helper"
import ModalTaller from "../Modal/ModalTaller"

export default function CursosArea() {
  const [selectedTaller, setSelectedTaller] = useState<{
    label: string
    tallerDescriptionTag: string
    tallerDescriptionGeneral?: string
    images: string[]
    price: string
  } | null>(null)

  // Datos de talleres con placeholders (limitados a 3 imágenes)
  const placeholderTalleres = [
    {
      label: "Creamos con nuestras manos",
      tallerDescriptionTag: "manual textil decoración",
      tallerDescriptionGeneral:
        "Con diversos elementos dispuestos en la mesa y una guía, realizamos nuestro propio diseño; yo te muestro y enseño mi técnica, te acompaño en el proceso; son talleres presenciales de 3 horas y, al finalizar la labor, sientes satisfacción y tu creatividad se despierta para más.",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=310&width=410",
        "/placeholder.svg?height=320&width=420",
      ],
      price: "$10.000 ARS",
    },
  ]

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
        <div className="flex flex-wrap items-stretch justify-center my-10 gap-8">
          {placeholderTalleres.map((item, index) => (
            <CardTaller
              key={index}
              label={item.label}
              tallerDescriptionTag={item.tallerDescriptionTag}
              tallerDescriptionGeneral={item.tallerDescriptionGeneral}
              images={item.images}
              price={item.price}
              onClick={() => setSelectedTaller(item)}
            />
          ))}
        </div>
        {selectedTaller && (
          <ModalTaller
            label={selectedTaller.label}
            tallerDescriptionTag={selectedTaller.tallerDescriptionTag}
            tallerDescriptionGeneral={selectedTaller.tallerDescriptionGeneral}
            images={selectedTaller.images}
            price={selectedTaller.price}
            onClose={() => setSelectedTaller(null)}
          />
        )}
      </div>
    </div>
  )
}

