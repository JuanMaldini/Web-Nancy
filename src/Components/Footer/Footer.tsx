import { FaInstagram, FaWhatsapp, FaHeart } from "react-icons/fa"
import { LuPhone } from "react-icons/lu"
import { FaLocationDot } from "react-icons/fa6"
import { getPhoneContact, getWhatsappContact, InstagramLink } from "../A-Helpers/Helper"

export default function Footer() {
  return (
    <div className="bg-white pt-10 relative">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Columna 1: Logo e información */}
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Logo Nancy"
                width="100"
                className="transition-transform duration-300 hover:scale-105"
              />
            </a>
            <p className="text-sm text-gray-600 leading-relaxed">
              Breathe Smell Relax ofrece productos artesanales y talleres creativos para enriquecer tu bienestar y
              espacio personal.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaLocationDot className="text-[var(--varCol03)]" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#Navbar"
                  className="text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300 inline-block"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#CursosArea"
                  className="text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300 inline-block"
                >
                  Talleres
                </a>
              </li>
              <li>
                <a
                  href="#ProductsArea"
                  className="text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300 inline-block"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#GalleryArea"
                  className="text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300 inline-block"
                >
                  Galería
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ayuda */}
          <div>
            <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#Contact"
                  className="text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300 inline-block"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#Faq"
                  className="text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300 inline-block"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={InstagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300"
                >
                  <FaInstagram className="text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsappContact()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300"
                >
                  <FaWhatsapp className="text-[#25D366]" />
                  <span>Whatsapp</span>
                </a>
              </li>
              <li>
                <a
                  href={getPhoneContact()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--varCol03)] transition-colors duration-300"
                >
                  <LuPhone className="text-[#007BFF]" />
                  <span>Teléfono</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-gray-100 w-full my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Breathe Smell Relax. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Hecho con <FaHeart className="text-[var(--varCol03)] text-xs" /> en Buenos Aires
          </p>
        </div>
      </div>

      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--varCol02)] via-[var(--varCol03)] to-[var(--varCol02)]"></div>
    </div>
  )
}

