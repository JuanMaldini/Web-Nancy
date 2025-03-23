"use client"

import { useState } from "react"
import Spacebar from "../Spacebar/Spacebar"
import { faqs } from "../A-Helpers/Helper"
import { FaChevronDown } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  // Función para renderizar dinámicamente las preguntas frecuentes
  const renderFaqItems = () => {
    const faqKeys = Object.keys(faqs)
    const faqItems = []

    for (let i = 1; i <= faqKeys.length / 2; i++) {
      const questionKey = `faq${String(i).padStart(2, "0")}A`
      const answerKey = `faq${String(i).padStart(2, "0")}B`

      if (faqs[questionKey] && faqs[answerKey]) {
        faqItems.push(
          <div className="mb-3" key={i}>
            <div
              className={`rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 ${openItem === i ? "shadow-md" : ""}`}
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(i)}
              >
                <span className="text-[15px] text-gray-800">{faqs[questionKey]}</span>
                <motion.div animate={{ rotate: openItem === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <FaChevronDown className="text-[var(--varCol03)] text-xs" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openItem === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 pt-0 border-t border-gray-100 text-[14px] text-gray-600 leading-relaxed">
                      {faqs[answerKey]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>,
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

