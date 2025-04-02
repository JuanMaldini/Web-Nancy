"use client"

import { useState, useEffect, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import ImageWithFallback from "@/components/ui/ImageWithFallback"
import { getImage } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [titleVisible, setTitleVisible] = useState(true) // Estado para controlar si el título principal es visible
  const logoSectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        // Verificar si el título principal está visible en la ventana
        const titleRect = titleRef.current.getBoundingClientRect()
        const isTitleVisible = titleRect.bottom > 0
        setTitleVisible(isTitleVisible)
      }
    }

    // Ejecutar una vez al inicio para establecer el estado inicial
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Logo y título - esta parte NO es sticky */}
      <div id="Navbar" className="bg-[var(--varColWhite3)] shadow-sm" ref={logoSectionRef}>
        <div className="flex flex-col items-center py-4">
          <ImageWithFallback
            src={getImage("logo") || "/placeholder.svg"}
            fallbackSrc="/placeholder.svg?height=250&width=250"
            alt="Logo Web"
            className="w-[250px]"
          />
          <h1 className="text-2xl text-[var(--varCol03)] mt-2" ref={titleRef}>
            Breathe Smell Relax
          </h1>
        </div>
      </div>

      {/* Barra de navegación - esta parte SÍ es sticky */}
      <div className="sticky top-0 z-50 bg-[var(--varColWhite3)] shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center h-[46px]">
          {/* Logo pequeño y título - aparece cuando el título principal no es visible */}
          {!titleVisible && (
            <div className="flex items-center mr-4">
              <ImageWithFallback
                src={getImage("logoSmall") || "/placeholder.svg"}
                fallbackSrc="/placeholder.svg?height=30&width=30"
                alt="Logo Web"
                className="w-[30px]"
              />
              <p className="ml-3 font-semibold text-[var(--varCol03)] whitespace-nowrap">Breathe Smell Relax</p>
            </div>
          )}

          {/* Espacio flexible que empuja los enlaces */}
          <div className="flex-grow"></div>

          {/* Menú de navegación para pantallas grandes */}
          <div
            className="hidden md:flex transition-all duration-300 ease-in-out"
            style={{
              justifyContent: titleVisible ? "center" : "flex-end",
              width: "100%",
              position: titleVisible ? "absolute" : "relative",
              left: titleVisible ? "0" : "auto",
              right: titleVisible ? "0" : "auto",
            }}
          >
            <ul className="flex space-x-8">
              <li>
                <a className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500" href="#Navbar">
                  Inicio
                </a>
              </li>
              <li>
                <a className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500" href="#CursosArea">
                  Talleres
                </a>
              </li>
              <li>
                <a className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500" href="#ProductsArea">
                  Productos
                </a>
              </li>
              <li>
                <a className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500" href="#GalleryArea">
                  Galería
                </a>
              </li>
              <li>
                <a className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500" href="#Contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Botón de menú para móviles */}
          <button className="md:hidden ml-auto text-black focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col text-right bg-[var(--varColWhite3)] shadow-md rounded-b-lg p-4">
              <li className="py-3 border-b border-gray-100">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#Navbar"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </a>
              </li>
              <li className="py-3 border-b border-gray-100">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#CursosArea"
                  onClick={() => setIsOpen(false)}
                >
                  Talleres
                </a>
              </li>
              <li className="py-3 border-b border-gray-100">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#ProductsArea"
                  onClick={() => setIsOpen(false)}
                >
                  Productos
                </a>
              </li>
              <li className="py-3 border-b border-gray-100">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#GalleryArea"
                  onClick={() => setIsOpen(false)}
                >
                  Galería
                </a>
              </li>
              <li className="py-3">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#Contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

