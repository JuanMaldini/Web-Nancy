import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/Icons/Logo/Logo.jpg"

import "./Footer.css";

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="container">
      <div className="footerSection">
        <footer>

          <div className="d-flex flex-row justify-content-between">

            <ul className="nav col-3 justify-content-start d-flex flex-column">
              <li><img src={Logo} width="100"/></li>
              <li className="nav-item text-white text-decoration-none">Buenos Aires, Argentina</li>
            </ul>

            <ul className="nav col-1 justify-content-start d-flex flex-column">
              <li className="fs-7 fst-italic nav-item-title text-white text-decoration-none">LINKS</li>
              <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Inicio</a></li>
              <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Productos</a></li>
              <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Galería</a></li>
              <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Contacto</a></li>
            </ul>

            <ul className="nav col-1 justify-content-start d-flex flex-column">
              <li className="fs-7 fst-italic nav-item-title text-white text-decoration-none">AYUDA</li>
              <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">FAQs</a></li>
            </ul>

            <ul className="nav col-3 justify-content-start align-items-start d-flex flex-column">
              <li className="fs-7 fst-italic nav-item-title text-white text-decoration-none">CONTACTO</li>
              <ul className="nav d-flex flex-row justify-content-start">
                <li className="nav-item mx-1"><a href="https://www.instagram.com/stories/breathesmellrelax/" target="_blank"><IoMailOutline style={{ color: 'white' }} /></a></li>
                <li className="nav-item mx-1"><a href="https://www.instagram.com/stories/breathesmellrelax/" target="_blank" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Email</a></li>
              </ul>
              <ul className="nav d-flex flex-row justify-content-start">
                <li className="nav-item mx-1"><a href="https://www.instagram.com/stories/breathesmellrelax/" target="_blank"><FaInstagram style={{ color: 'white' }} /></a></li>
                <li className="nav-item mx-1"><a href="https://www.instagram.com/stories/breathesmellrelax/" target="_blank" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Instagram</a></li>
              </ul>
              <ul className="nav d-flex flex-row justify-content-start">
                <li className="nav-item mx-1"><a href="http://wa.me/5491135578288" target="_blank"><FaWhatsapp style={{ color: 'white' }} /></a></li>
                <li className="nav-item mx-1"><a href="http://wa.me/5491135578288" target="_blank" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Whatsapp</a></li>
              </ul>
            </ul>
          </div>

        <div className="spacerArea"></div>

        <div className="nav-item text-white text-decoration-none">
          © 2024 Nancy. Todos los derechos reservados.
        </div>
        </footer>


      </div>
    </div>
  )
}