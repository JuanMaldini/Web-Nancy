"use client"

type Props = {
  imageG: string
  onClick?: () => void
}

export default function Gallery({ imageG, onClick }: Props) {
  return (
    <img
      src={imageG || "/placeholder.svg"}
      alt="Gallery item"
      onClick={onClick}
      className="w-[150px] h-[220px] sm:w-[170px] sm:h-[240px] md:w-[200px] md:h-[290px] lg:w-[220px] lg:h-[320px] xl:w-[250px] xl:h-[360px] object-cover rounded-lg m-2 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cardGeneral"
    />
  )
}

