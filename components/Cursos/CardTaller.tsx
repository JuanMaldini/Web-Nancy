"use client"

import { FaWhatsapp } from "react-icons/fa"
import Carousel from "../Carousel"

export type TallerProp = {
  label: string
  tallerDescriptionTag: string
  tallerDescriptionGeneral?: string
  price: string
  images: string[]
  onClick?: () => void
}

export default function CardTaller({
  label,
  tallerDescriptionTag,
  tallerDescriptionGeneral,
  price,
  images,
  onClick,
}: TallerProp) {
  // Helper function
  const getWhatsappContactTaller = (label: string) => {
    const Celular = "5491135578288"
    const WelcomeText = `Hola Nancy, un gusto. Estaba revisando su web y me gustaría más información sobre el curso que se llama "${label}", Gracias!.`
    const WelcomeTextF = encodeURIComponent(WelcomeText)
    return `http://wa.me/${Celular}?text=${WelcomeTextF}`
  }

  return (
    <div
      className="w-[350px] sm:w-[450px] md:w-[650px] lg:w-[750px] xl:w-[850px] grid grid-cols-[1fr_1.7fr] h-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] bg-white cardGeneral"
      onClick={onClick}
    >
      <div className="h-full overflow-hidden">
        <Carousel
          images={images}
          height="h-full"
          showIndicators={true}
          showControls={true}
          showCounter={false}
          fullHeightControls={true}
          noHoverEffect={true}
        />
      </div>
      <div className="flex flex-col p-6 bg-white">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="font-medium text-xl mb-3 text-[var(--varCol03)]">{label}</div>
          </div>
          <div className="flex flex-row flex-wrap justify-start gap-1.5 mb-3">
            {tallerDescriptionTag.split(" ").map((word, index) => (
              <div key={index} className="bg-[var(--varCol02-B)] text-[var(--varCol03)] px-3 py-1 rounded-full text-sm">
                {word}
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-600 mb-4">
            {tallerDescriptionGeneral ||
              "Aprende técnicas creativas en un ambiente relajado y divertido. Taller presencial con todos los materiales incluidos."}
          </div>

          <div className="flex flex-row items-center justify-between gap-4 mt-auto">
            <button className="bg-[var(--varCol02)] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--varCol03)] hover:shadow-md">
              Ver más
            </button>

            <div className="flex items-center gap-2">
              <p className="text-[var(--varCol03)] text-base m-0">{price}</p>
              <a
                className="flex text-[24px] text-[#25D366] transition-all hover:scale-110"
                href={getWhatsappContactTaller(label)}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

