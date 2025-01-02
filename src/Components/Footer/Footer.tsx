import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import ContactImg from "../../assets/Icons/Logo/Logo01.png";
import "./Footer.css";
import Spacebar from "../Spacebar/Spacebar";
import { EmailLink, getPhoneContact, getWhatsappContact, InstagramLink } from "../A-Helpers/Helper";

type Props = {}

export default function Footer({}: Props) {
  return (
      <div className="footerSection">
        <footer>

          <div className="colFooter">
 
            <ul className="d-flex flex-column list-unstyled">
              <li><a href="#"><img src={ContactImg} alt="Image for Contact" width="100"/></a></li>
              <li>Buenos Aires, Argentina</li>
            </ul>

            <ul className="nav d-flex flex-column">
              <li className="fs-7 fst-italic">LINKS</li>
              <li className=""><a href="#Navbar" className="linkUnderline">Inicio</a></li>
              <li className=""><a href="#CursosArea" className="linkUnderline">Cursos</a></li>
              <li className=""><a href="#ProductsArea" className="linkUnderline">Productos</a></li>
              <li className=""><a href="#GalleryArea" className="linkUnderline">Galería</a></li>
            </ul>

            <ul className="nav d-flex flex-column">
              <li className="fs-7 fst-italic">AYUDA</li>
              <li className=""><a href="#Contact" className="linkUnderline">Contacto</a></li>
              <li className=""><a href="#Faq" className="linkUnderline">FAQ</a></li>
            </ul>

            <ul className="nav d-flex flex-column">
              <li className="fs-7 fst-italic">CONTACTO</li>
              {/* <ul className="nav contactNav">
                <li className="mx-1"><a href={EmailLink} target="_blank"><IoMailOutline style={{ color: 'black' }} /></a></li>
                <li className="mx-1"><a href={EmailLink} target="_blank" className="linkUnderline">Email</a></li>
              </ul> */}
              <ul className="nav contactNav">
                <li className="mx-1"><a href={InstagramLink} target="_blank"><FaInstagram style={{ color: 'black' }} /></a></li>
                <li className="mx-1"><a href={InstagramLink} target="_blank" className="linkUnderline">Instagram</a></li>
              </ul>
              <ul className="nav contactNav">
                <li className="mx-1"><a href={getWhatsappContact()} target="_blank"><FaWhatsapp style={{ color: 'black' }} /></a></li>
                <li className="mx-1"><a href={getWhatsappContact()} target="_blank" className="linkUnderline">Whatsapp</a></li>
              </ul>
              <ul className="nav contactNav">
                <li className="mx-1"><a href={getPhoneContact()} target="_blank"><LuPhone  style={{ color: 'black' }} /></a></li>
                <li className="mx-1"><a href={getPhoneContact()} target="_blank" className="linkUnderline">Teléfono</a></li>
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