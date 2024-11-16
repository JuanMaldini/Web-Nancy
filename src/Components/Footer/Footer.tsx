import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./Footer.css";

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center p-2 bg-dark">
        <p className="col-md-1 mb-0 text-white">© 2024 Proyecto</p>
        <ul className="nav col-md-1 justify-content-start d-flex flex-column">
          <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Inicio</a></li>
          <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Productos</a></li>
          <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Galería</a></li>
          <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">FAQs</a></li>
          <li className="nav-item"><a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Contacto</a></li>
        </ul>
        <ul className="nav col-md-1  justify-content-end">
          <li className="nav-item"><a href="#" target="_blank"><FaInstagram style={{ color: 'white' }} /></a></li>
          <li className="nav-item"><a href="#" target="_blank"><CiMail style={{ color: 'white' }} /></a></li>
        </ul>
      </footer>
    </div>
  )
}
