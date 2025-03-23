import "./Button.css"
import { FaWhatsapp } from "react-icons/fa"

type Props = {
  destination: string
  textButton: string
  buttonClass: string
}

export default function Button({ destination, buttonClass, textButton }: Props) {
  return (
    <a href={destination} className={buttonClass} target="_blank" rel="noreferrer">
      {" "}
      {textButton} <FaWhatsapp />
    </a>
  )
}

