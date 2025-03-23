"use client"

import { useState, useEffect, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const logoSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (logoSectionRef.current) {
        // Obtener la posición del elemento del logo
        const logoRect = logoSectionRef.current.getBoundingClientRect()

        // Si la parte inferior del logo está por encima de la ventana, mostrar el título
        if (logoRect.bottom < 0) {
          setShowTitle(true)
        } else {
          setShowTitle(false)
        }
      }
    }

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
          <img src="/placeholder.svg?height=250&width=250" alt="Logo Web" className="w-[250px]" />
          <h1 className="text-2xl text-[var(--varCol03)] mt-2">Breathe Smell Relax</h1>
        </div>
      </div>

      {/* Barra de navegación - esta parte SÍ es sticky */}
      <div className="sticky top-0 z-50 bg-[var(--varColWhite3)] shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo pequeño y título para móviles */}
          <div className="flex items-center">
            <img src="/placeholder.svg?height=30&width=30" alt="Logo Web" className="w-[30px]" />

            {/* Título que aparece con fade cuando se hace scroll */}
            <p
              className={`ml-3 font-semibold text-[var(--varCol03)] transition-opacity duration-300 ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              Breathe Smell Relax
            </p>
          </div>

          {/* Menú de navegación para pantallas grandes */}
          <div className="hidden md:flex">
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
          <button className="md:hidden text-black focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
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

