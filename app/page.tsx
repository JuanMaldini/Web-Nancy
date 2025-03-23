"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa"
import CardTaller from "@/components/Cursos/CardTaller"
import Product from "@/components/Products/Product"
import ModalTaller from "@/components/Modal/ModalTaller"
import ModalProduct from "@/components/Modal/ModalProduct"
import ModalGallery from "@/components/Modal/ModalGallery"
import Footer from "@/components/Footer/Footer"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [selectedTaller, setSelectedTaller] = useState<{
    label: string
    tallerDescriptionTag: string
    tallerDescriptionGeneral?: string
    images: string[]
    price: string
  } | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<{
    label: string
    productDescriptionTag: string
    productDescriptionGeneral?: string
    images: string[]
    price: string
  } | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Referencia para el elemento del logo
  const logoSectionRef = useRef<HTMLDivElement>(null)

  // Efecto para controlar la visibilidad del título en la navbar
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

  // Función para manejar clics en enlaces con desplazamiento suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsOpen(false)

    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  // Helper functions
  const getWhatsappContact = () => {
    const Celular = "5491135578288"
    const ContactText = `Hola Nancy, espero que se encuentre bien. Me estoy contactando desde la página web.`
    const ContactTextF = encodeURIComponent(ContactText)
    return `http://wa.me/${Celular}?text=${ContactTextF}`
  }

  const getPhoneContact = () => {
    return `tel:+5491135578288`
  }

  const InstagramLink = "https://www.instagram.com/breathesmellrelax"

  const descriptionText1 =
    "Te cuento que fui muy afortunada al tener una abuela que me enseñó algunos puntos de crochet y bordado entre tantas otras cosas divertidas y que SE que hoy me inspiran."
  const descriptionText2 = "Y hace 4 años que paso tiempo en mi espacio creando lo que resuena en mi."
  const descriptionText3 = "Y aquí encontras un poco de lo que sucede en mi escaparate 🧶🪡🧵🧘🏻‍♀🪬🛍🧸🎁🎀🎉"

  const talleresText = "Para que aprendas las técnicas mas divertidas"
  const productsText = "Para que los puedas tener todos en tu hogar"
  const galleryText = "Una bella muestra de mis trabajos"

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

  // Datos de productos con placeholders (limitados a 3 imágenes)
  const placeholderProducts = [
    {
      label: "Almohadillas",
      productDescriptionGeneral:
        "Están confeccionadas a mano, rellenas de semillas, flores de lavanda y aceites esenciales; miden 38 cm de largo x 12 cm de ancho, pesan 550 grs, y están diseñadas con propósito terapéutico para tratar dolores, inflamación, contracturas y relajación, siendo ideales para usar en cualquier zona del cuerpo.",
      productDescriptionTag: "almohadillas terapéutico",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=310&width=410",
        "/placeholder.svg?height=320&width=420",
      ],
      price: "$10.000",
    },
  ]

  // Crear un array de placeholders para la galería (limitado a 8 imágenes)
  const placeholderImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=310&width=410",
    "/placeholder.svg?height=320&width=420",
    "/placeholder.svg?height=330&width=430",
    "/placeholder.svg?height=340&width=440",
    "/placeholder.svg?height=350&width=450",
    "/placeholder.svg?height=360&width=460",
    "/placeholder.svg?height=370&width=470",
  ]

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Navbar */}
      <div id="Navbar" className="bg-[#fafafa] shadow-sm" ref={logoSectionRef}>
        <div className="flex flex-col items-center py-4">
          <img src="/placeholder.svg?height=250&width=250" alt="Logo Web" className="w-[250px]" />
          <h1 className="text-2xl text-[#d76c4c] mt-2">Breathe Smell Relax</h1>
        </div>
      </div>

      {/* Barra de navegación */}
      <div className="sticky top-0 z-50 bg-[#fafafa] shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=30&width=30" alt="Logo Web" className="w-[30px]" />
            <p
              className={`ml-3 font-semibold text-[#d76c4c] transition-opacity duration-300 ${showTitle ? "opacity-100" : "opacity-0"}`}
            >
              Breathe Smell Relax
            </p>
          </div>

          <div className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#Navbar"
                  onClick={(e) => handleSmoothScroll(e, "Navbar")}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#CursosArea"
                  onClick={(e) => handleSmoothScroll(e, "CursosArea")}
                >
                  Talleres
                </a>
              </li>
              <li>
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#ProductsArea"
                  onClick={(e) => handleSmoothScroll(e, "ProductsArea")}
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#GalleryArea"
                  onClick={(e) => handleSmoothScroll(e, "GalleryArea")}
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#Contact"
                  onClick={(e) => handleSmoothScroll(e, "Contact")}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <button className="md:hidden text-black focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col text-right bg-[#fafafa] shadow-md rounded-b-lg p-4">
              <li className="py-3 border-b border-gray-100">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#Navbar"
                  onClick={(e) => handleSmoothScroll(e, "Navbar")}
                >
                  Inicio
                </a>
              </li>
              <li className="py-3 border-b border-gray-100">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#CursosArea"
                  onClick={(e) => handleSmoothScroll(e, "CursosArea")}
                >
                  Talleres
                </a>
              </li>
              <li className="py-3 border-b border-gray-100">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#ProductsArea"
                  onClick={(e) => handleSmoothScroll(e, "ProductsArea")}
                >
                  Productos
                </a>
              </li>
              <li className="py-3 border-b border-gray-100">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#GalleryArea"
                  onClick={(e) => handleSmoothScroll(e, "GalleryArea")}
                >
                  Galería
                </a>
              </li>
              <li className="py-3">
                <a
                  className="text-[#e60d0d] transition-all duration-300 hover:text-gray-500"
                  href="#Contact"
                  onClick={(e) => handleSmoothScroll(e, "Contact")}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="my-16 relative bg-[#fafafa]">
        <div className="min-h-[600px] md:min-h-[500px] lg:min-h-[550px] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative justify-center items-center gap-0 overflow-hidden">
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt=""
            className="absolute w-full h-full object-cover -z-10 blur-xl scale-110"
          />

          <div className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl lg:rounded-r-none bg-white/80 backdrop-blur-md flex-1 h-full flex justify-center items-center p-8 shadow-md">
            <img
              className="w-4/5 max-w-[300px] rounded-3xl object-cover shadow-xl transition-transform duration-300 hover:scale-[1.01]"
              src="/placeholder.svg?height=400&width=300"
              alt="Nancy imagen"
            />
          </div>

          <div className="rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl lg:rounded-l-none lg:rounded-r-none bg-white/80 backdrop-blur-md flex-1 h-full flex p-8 shadow-md">
            <ul className="flex flex-col items-center md:items-start justify-center w-full">
              <li className="flex items-center text-2xl font-semibold text-[#d76c4c] mb-2">Hola soy Nancy 👋</li>
              <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">
                {descriptionText1}
              </li>
              <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">
                {descriptionText2}
              </li>
              <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">
                {descriptionText3}
              </li>
            </ul>
          </div>

          <div className="hidden lg:block rounded-r-3xl bg-white/80 backdrop-blur-md flex-1 h-full overflow-hidden relative shadow-md">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              src="/placeholder.svg?height=500&width=400"
              alt="imagen de trabajos"
            />
          </div>
        </div>
      </div>

      {/* Talleres */}
      <div id="CursosArea" className="bg-[#fafafa] flex flex-col justify-center items-center py-16">
        <div className="max-w-6xl w-full px-4">
          <div className="text-center mb-8">
            <p className="text-2xl font-medium text-[#d76c4c] mb-2">Talleres</p>
            <p className="text-base text-gray-600 max-w-xl mx-auto">{talleresText}</p>
          </div>
          <div className="h-[3px] bg-gradient-to-r from-[#ffb7a1] via-[#d76c4c] to-[#ffb7a1] w-4/5 max-w-[300px] my-5 mx-auto rounded-full shadow-sm"></div>
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
        </div>
      </div>

      {/* Productos */}
      <div id="ProductsArea" className="bg-[#fafafa] flex flex-col justify-center items-center py-16">
        <div className="max-w-6xl w-full px-4">
          <div className="text-center mb-8">
            <p className="text-2xl font-medium text-[#d76c4c] mb-2">Productos</p>
            <p className="text-base text-gray-600 max-w-xl mx-auto">{productsText}</p>
          </div>
          <div className="h-[3px] bg-gradient-to-r from-[#ffb7a1] via-[#d76c4c] to-[#ffb7a1] w-4/5 max-w-[300px] my-5 mx-auto rounded-full shadow-sm"></div>
          <div className="flex flex-wrap items-stretch justify-center my-10 gap-8">
            {placeholderProducts.map((item, index) => (
              <Product
                key={index}
                label={item.label}
                productDescriptionTag={item.productDescriptionTag}
                productDescriptionGeneral={item.productDescriptionGeneral}
                images={item.images}
                price={item.price}
                onClick={() => setSelectedProduct(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Galería */}
      <div className="flex flex-col items-center bg-[#fafafa] mx-4 py-10" id="GalleryArea">
        <div className="bg-[#fafafa] flex flex-col items-center rounded-3xl p-10 w-full max-w-[1200px] shadow-md">
          <div className="text-center">
            <p className="text-[#d76c4c] text-xl font-semibold mb-2">Galería</p>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">{galleryText}</p>
          </div>
          <div className="h-[3px] bg-gradient-to-r from-[#ffb7a1] via-[#d76c4c] to-[#ffb7a1] w-4/5 max-w-[300px] my-5 mx-auto rounded-full shadow-sm"></div>
          <div className="rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 justify-center gap-5">
            {placeholderImages.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Gallery item ${index + 1}`}
                className="w-[150px] h-[220px] sm:w-[170px] sm:h-[240px] md:w-[200px] md:h-[290px] lg:w-[220px] lg:h-[320px] xl:w-[250px] xl:h-[360px] object-cover rounded-lg m-2 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] cardGeneral"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div id="Contact" className="py-12 px-5 m-0 bg-[#fafafa] bg-gradient-to-br from-[#fafafa] to-[#fff5f2]">
        <div className="p-10 rounded-3xl bg-white/90 shadow-md max-w-[1000px] mx-auto">
          <h2 className="text-[#d76c4c] text-3xl font-semibold mb-5 text-center">Estemos en contacto!</h2>
          <div className="h-[3px] bg-gradient-to-r from-[#ffb7a1] via-[#d76c4c] to-[#ffb7a1] w-4/5 max-w-[300px] my-5 mx-auto rounded-full shadow-sm"></div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex justify-center items-center">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Logo Nancy"
                className="max-w-full h-auto"
                width="300"
              />
            </div>
            <div className="max-w-[500px]">
              <h3 className="text-2xl text-[#d76c4c] mb-4">Hablemos!</h3>
              <p className="text-lg leading-relaxed text-gray-600 mb-5">
                ¿Tienes alguna pregunta sobre mis productos o talleres? ¿Buscas algo personalizado? Estoy aquí para
                ayudarte a encontrar lo que necesitas para tu bienestar y decoración.
              </p>
              <a
                href={getWhatsappContact()}
                className="inline-flex items-center gap-2.5 bg-[#ffb7a1] text-white py-3 px-6 rounded-full font-medium transition-all duration-300 shadow-md hover:bg-[#d76c4c] hover:-translate-y-1 hover:shadow-lg"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modales */}
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

      {selectedProduct && (
        <ModalProduct
          label={selectedProduct.label}
          productDescriptionTag={selectedProduct.productDescriptionTag}
          productDescriptionGeneral={selectedProduct.productDescriptionGeneral}
          images={selectedProduct.images}
          price={selectedProduct.price}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {selectedImage && <ModalGallery image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </main>
  )
}

