import { descriptionText1, descriptionText2, descriptionText3 } from "../A-Helpers/Helper"

export default function Description() {
  return (
    <div className="my-16 relative bg-[var(--varColWhite3)]">
      <div className="min-h-[600px] md:min-h-[500px] lg:min-h-[550px] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative justify-center items-center gap-0 overflow-hidden">
        {/* Imagen de fondo con blur */}
        <img
          src="/placeholder.svg?height=800&width=1200"
          alt=""
          className="absolute w-full h-full object-cover -z-10 blur-xl scale-110"
        />

        {/* Columna 1 - Imagen */}
        <div className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl lg:rounded-r-none bg-white/80 backdrop-blur-md flex-1 h-full flex justify-center items-center p-8 shadow-md">
          <img
            className="w-4/5 max-w-[300px] rounded-3xl object-cover shadow-xl transition-transform duration-300 hover:scale-[1.03]"
            src="/placeholder.svg?height=400&width=300"
            alt="Nancy imagen"
          />
        </div>

        {/* Columna 2 - Texto */}
        <div className="rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl lg:rounded-l-none lg:rounded-r-none bg-white/80 backdrop-blur-md flex-1 h-full flex p-8 shadow-md">
          <ul className="flex flex-col items-center md:items-start justify-center w-full">
            <li className="flex items-center text-2xl font-semibold text-[var(--varCol03)] mb-2">Hola soy Nancy 👋</li>
            <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">{descriptionText1}</li>
            <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">{descriptionText2}</li>
            <li className="text-lg leading-relaxed text-gray-800 text-center md:text-left py-3">{descriptionText3}</li>
          </ul>
        </div>

        {/* Columna 3 - Imagen adicional (solo visible en pantallas grandes) */}
        <div className="hidden lg:block rounded-r-3xl bg-white/80 backdrop-blur-md flex-1 h-full overflow-hidden relative shadow-md">
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src="/placeholder.svg?height=500&width=400"
            alt="imagen de trabajos"
          />
        </div>
      </div>
    </div>
  )
}

