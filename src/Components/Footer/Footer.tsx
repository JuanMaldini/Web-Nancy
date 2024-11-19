import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import ContactImg from "../../assets/Icons/Logo/Logo01.png";
import "./Footer.css";
import Spacebar from "../Spacebar/Spacebar";

type Props = {}

export default function Footer({}: Props) {
  return (
      <div className="footerSection">
        <footer>

          <div className="d-flex flex-row justify-content-between">
 
            <ul className="d-flex flex-column col-3 justify-content-start list-unstyled">
              <li><img src={ContactImg} alt="Image for Contact" width="100"/></li>
              <li>Buenos Aires, Argentina</li>
            </ul>

            <ul className="nav d-flex flex-column col-2 justify-content-start">
              <li className="fs-7 fst-italic nav-item-title">LINKS</li>
              <li className="nav-item"><a href="#" className="linkUnderline text-black">Inicio</a></li>
              <li className="nav-item"><a href="#" className="linkUnderline text-black">Productos</a></li>
              <li className="nav-item"><a href="#" className="linkUnderline text-black">Galería</a></li>
              <li className="nav-item"><a href="#" className="linkUnderline text-black">Contacto</a></li>
            </ul>

            <ul className="nav d-flex flex-column col-2 justify-content-start">
              <li className="fs-7 fst-italic nav-item-title">AYUDA</li>
              <li className="nav-item"><a href="#" className="linkUnderline text-black">FAQs</a></li>
            </ul>

            <ul className="nav d-flex flex-column col-3 justify-content-start align-items-start ">
              <li className="fs-7 fst-italic nav-item-title">CONTACTO</li>
              <ul className="nav d-flex flex-row justify-content-start">
                <li className="nav-item mx-1"><a href="https://www.instagram.com/stories/breathesmellrelax/" target="_blank"><IoMailOutline style={{ color: 'black' }} /></a></li>
                <li className="nav-item mx-1"><a href="https://www.instagram.com/stories/breathesmellrelax/" target="_blank" className="linkUnderline text-black">Email</a></li>
              </ul>
              <ul className="nav d-flex flex-row justify-content-start">
                <li className="nav-item mx-1"><a href="https://www.instagram.com/stories/breathesmellrelax/" target="_blank"><FaInstagram style={{ color: 'black' }} /></a></li>
                <li className="nav-item mx-1"><a href="https://www.instagram.com/stories/breathesmellrelax/" target="_blank" className="linkUnderline text-black">Instagram</a></li>
              </ul>
              <ul className="nav d-flex flex-row justify-content-start">
                <li className="nav-item mx-1"><a href="http://wa.me/5491135578288" target="_blank"><FaWhatsapp style={{ color: 'black' }} /></a></li>
                <li className="nav-item mx-1"><a href="http://wa.me/5491135578288" target="_blank" className="linkUnderline text-black">Whatsapp</a></li>
              </ul>
            </ul>
          </div>

          <Spacebar/>

          <div>
            © 2024 Nancy. Todos los derechos reservados.
          </div>
        </footer>

      </div>
  )
}