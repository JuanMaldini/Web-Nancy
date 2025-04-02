"use client"

import { useState } from "react"
import Spacebar from "@/components/ui/Spacebar"
import { FaChevronDown } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { faqsData } from "@/lib/helpers"

export default function Faq() {
const [openItem, setOpenItem] = useState<number | null>(null)

const toggleItem = (index: number) => {
  setOpenItem(openItem === index ? null : index)
}

// Función para renderizar dinámicamente las preguntas frecuentes
const renderFaqItems = () => {
  const faqItems = []

  // Definir explícitamente las claves para evitar errores de tipado
  const faqKeys = [
    { question: 'faq01A', answer: 'faq01B' },
    { question: 'faq02A', answer: 'faq02B' },
    { question: 'faq03A', answer: 'faq03B' },
    { question: 'faq04A', answer: 'faq04B' }
  ]

  for (let i = 0; i < faqKeys.length; i++) {
    const questionKey = faqKeys[i].question
    const answerKey = faqKeys[i].answer

    // Verificar que las claves existen en faqsData usando type assertion
    if (questionKey in faqsData && answerKey in faqsData) {
      const question = faqsData[questionKey as keyof typeof faqsData]
      const answer = faqsData[answerKey as keyof typeof faqsData]
      
      faqItems.push(
        <div className="mb-3" key={i + 1}>
          <div
            className={`rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 ${
              openItem === i + 1 ? "shadow-md" : ""
            }`}
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleItem(i + 1)}
            >
              <span className="text-[15px] text-gray-800">{question}</span>
              <motion.div animate={{ rotate: openItem === i + 1 ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <FaChevronDown className="text-[var(--varCol03)] text-xs" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openItem === i + 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 pt-0 border-t border-gray-100 text-[14px] text-gray-600 leading-relaxed">
                    {answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )
    }
  }
  return faqItems
}

return (
  <div id="Faq" className="py-16 px-5 bg-[var(--varColWhite3)]">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium text-[var(--varCol03)]">Preguntas Frecuentes</h2>
        <p className="text-sm text-gray-500 mt-2">Encuentra respuestas a las consultas más comunes</p>
        <Spacebar />
      </div>
      <div className="space-y-2">{renderFaqItems()}</div>
    </div>
  </div>
)
}