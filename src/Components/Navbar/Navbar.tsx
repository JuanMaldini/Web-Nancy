import "./Navbar.css";
import "../A-Helpers/Helper.css";

type Props = {};
import Logo from "../../assets/Icons/Logo/Logo01.png";
import Corazon from "../../assets/Icons/Logo/Corazon.png";

export default function Navbar({}: Props) {
  return (
    <nav id="Navbar" className="navbarA navbar-expand-md navbar-dark d-flex flex-column" aria-label="Tenth navbar example">
      <div className="navbarUp">
        <ul className="list-unstyled d-flex flex-column text-center">
          <li>
            <img src={Logo} alt="Logo Web" width="250"></img>
            <h1 className="fs-2 titleNav1">Breathe Smell Relax</h1>
          </li>
        </ul>
      </div>
      <div className="containerNav container-fluid fs-5">

        <img className="Corazon" src={Corazon} alt="Logo Web" width="30" />
        
        <div className="titleNav2">
          <p>Breathe Smell Relax</p>
        </div>

        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
          <ul className="spacerNav navbar-nav text-end">
            <li className="nav-item nav-link"><a className="linkUnderline" href="#Navbar">Inicio</a></li>
            <li className="nav-item nav-link"><a className="linkUnderline" href="#CursosArea">Cursos</a></li>
            <li className="nav-item nav-link"><a className="linkUnderline" href="#ProductsArea">Productos</a></li>
            <li className="nav-item nav-link"><a className="linkUnderline" href="#GalleryArea">Galería</a></li>
            <li className="nav-item nav-link"><a className="linkUnderline" href="#Contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
