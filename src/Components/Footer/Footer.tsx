import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import ContactImg from "../../assets/Icons/Logo/Logo01.png";
import "./Footer.css";
import Spacebar from "../Spacebar/Spacebar";
import { EmailLink, getWhatsappContact, InstagramLink } from "../A-Helpers/Helper";

type Props = {}

export default function Footer({}: Props) {
  return (
      <div className="footerSection">
        <footer>

          <div className="colFooter footerDiv">
 
            <ul className="d-flex flex-column col-3 list-unstyled">
              <li><a href="#"><img src={ContactImg} alt="Image for Contact" width="100"/></a></li>
              <li>Buenos Aires, Argentina</li>
            </ul>

            <ul className="nav d-flex flex-column col-2">
              <li className="fs-7 fst-italic">LINKS</li>
              <li className=""><a href="#Navbar" className="linkUnderline">Inicio</a></li>
              <li className=""><a href="#ProductsArea" className="linkUnderline">Productos</a></li>
              <li className=""><a href="#GalleryArea" className="linkUnderline">Galería</a></li>
              <li className=""><a href="#Contact" className="linkUnderline">Contacto</a></li>
            </ul>

            <ul className="nav d-flex flex-column col-2">
              <li className="fs-7 fst-italic">AYUDA</li>
              <li className=""><a href="#Faq" className="linkUnderline">FAQ</a></li>
            </ul>

            <ul className="nav d-flex flex-column col-3">
              <li className="fs-7 fst-italic">CONTACTO</li>
              <ul className="nav">
                <li className="mx-1"><a href={EmailLink} target="_blank"><IoMailOutline style={{ color: 'black' }} /></a></li>
                <li className="mx-1"><a href={EmailLink} target="_blank" className="linkUnderline">Email</a></li>
              </ul>
              <ul className="nav">
                <li className="mx-1"><a href={InstagramLink} target="_blank"><FaInstagram style={{ color: 'black' }} /></a></li>
                <li className="mx-1"><a href={InstagramLink} target="_blank" className="linkUnderline">Instagram</a></li>
              </ul>
              <ul className="nav">
                <li className="mx-1"><a href={getWhatsappContact()} target="_blank"><FaWhatsapp style={{ color: 'black' }} /></a></li>
                <li className="mx-1"><a href={getWhatsappContact()} target="_blank" className="linkUnderline">Whatsapp</a></li>
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