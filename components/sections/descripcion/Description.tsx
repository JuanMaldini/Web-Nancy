import { descriptionText1, descriptionText2, descriptionText3 } from "../../../lib/helpers"
import { getImage } from "../../../lib/utils"

export default function Description() {
  return (
    <div className="my-20 relative bg-[var(--varColWhite3)]">
      {/* Imagen de fondo con blur - mejorada */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={getImage("backgroundDescription") || "/placeholder.svg?height=800&width=1200"}
          alt=""
          className="w-full h-full object-cover opacity-60 blur-[8px] scale-110 transform"
          style={{
            position: "absolute",
            zIndex: 0,
            objectPosition: "center",
          }}
        />
        {/* Overlay para mejorar la visibilidad del contenido */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-[1]"></div>
      </div>

      <div className="min-h-[650px] md:min-h-[550px] lg:min-h-[600px] p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative justify-center items-center gap-0 overflow-hidden z-[2]">
        {/* Columna 1 - Imagen - static version */}
        <div className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl lg:rounded-r-none bg-white/80 backdrop-blur-md flex-1 h-full flex justify-center items-center p-8 shadow-lg">
          <img
            src={getImage("nancyProfile") || "/placeholder.svg?height=400&width=300"}
            alt="Nancy imagen"
            className="w-4/5 max-w-[300px] rounded-3xl object-cover shadow-xl"
          />
        </div>

        {/* Columna 2 - Texto */}
        <div className="rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl lg:rounded-l-none lg:rounded-r-none bg-white/80 backdrop-blur-md flex-1 h-full flex p-8 shadow-lg">
          <ul className="flex flex-col items-center md:items-start justify-center w-full">
            <li className="flex items-center text-2xl font-semibold text-[var(--varCol03)] mb-2">Hola soy Nancy 👋</li>
            <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">{descriptionText1}</li>
            <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">{descriptionText2}</li>
            <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">{descriptionText3}</li>
          </ul>
        </div>

        {/* Columna 3 - Imagen adicional - static version */}
        <div className="hidden lg:block rounded-r-3xl bg-white/80 backdrop-blur-md flex-1 h-full overflow-hidden relative shadow-lg">
          <img
            src={getImage("workSample") || "/placeholder.svg?height=500&width=400"}
            alt="imagen de trabajos"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

