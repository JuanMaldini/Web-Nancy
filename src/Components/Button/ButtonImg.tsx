import "./Button.css"
import { FaWhatsapp } from "react-icons/fa";
import "../A-Helpers/Helper.css";

type Props = {
    destination: string,
    textButton: string,
    buttonClass: string,
}

export default function Button({destination, buttonClass, textButton}: Props) {
  return (
    <a href={destination} className={buttonClass} target="_blank"> {textButton} <FaWhatsapp  /></a>
  )
}