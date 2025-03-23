const Description = () => {
  return (
    <div>
      {/* Modificar las transformaciones para evitar el blur en textos */}
      <img
        className="w-4/5 max-w-[300px] rounded-3xl object-cover shadow-xl transition-transform duration-300 hover:scale-[1.01]"
        src="/placeholder.svg?height=400&width=300"
        alt="Nancy imagen"
      />

      {/* Y también */}
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        src="/placeholder.svg?height=500&width=400"
        alt="imagen de trabajos"
      />
    </div>
  )
}

export default Description

