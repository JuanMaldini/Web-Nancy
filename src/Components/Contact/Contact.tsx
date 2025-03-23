import { FaWhatsapp } from "react-icons/fa"
import Spacebar from "../Spacebar/Spacebar"
import { getWhatsappContact } from "../A-Helpers/Helper"

export default function Contact() {
  return (
    <div
      id="Contact"
      className="py-12 px-5 m-0 bg-[var(--varColWhite3)] bg-gradient-to-br from-[var(--varColWhite3)] to-[#fff5f2]"
    >
      <div className="p-10 rounded-3xl bg-white/90 shadow-md max-w-[1000px] mx-auto">
        <h2 className="text-[var(--varCol03)] text-3xl font-semibold mb-5 text-center">Estemos en contacto!</h2>
        <Spacebar />
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
            <h3 className="text-2xl text-[var(--varCol03)] mb-4">Hablemos!</h3>
            <p className="text-lg leading-relaxed text-gray-600 mb-5">
              ¿Tienes alguna pregunta sobre mis productos o talleres? ¿Buscas algo personalizado? Estoy aquí para
              ayudarte a encontrar lo que necesitas para tu bienestar y decoración.
            </p>
            <a
              href={getWhatsappContact()}
              className="inline-flex items-center gap-2.5 bg-[var(--varCol02)] text-white py-3 px-6 rounded-full font-medium transition-all duration-300 shadow-md hover:bg-[var(--varCol03)] hover:-translate-y-1 hover:shadow-lg"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

