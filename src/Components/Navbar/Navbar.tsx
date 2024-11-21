import "./Navbar.css";

type Props = {};
import Logo from "../../assets/Icons/Logo/Logo01.png";
import Corazon from "../../assets/Icons/Logo/Corazon.png";

export default function Navbar({}: Props) {
  return (
    <nav
      className="navbarA navbar-expand-md navbar-dark d-flex flex-column"
      aria-label="Tenth navbar example"
    >
      <div>
        <ul className="list-unstyled d-flex flex-column text-center">
          <li>
            <img
              className="mainLogo"
              src={Logo}
              alt="Logo Web"
              width="250"
            ></img>
            <h1 className="fs-2 titleNav1">Breathe Smell Relax</h1>
          </li>
        </ul>
      </div>
      <div className="container-fluid fs-5">
       
        <img className="Corazon" src={Corazon} alt="Logo Web" width="30" />
        
        <h2 className="fs-2 titleNav2">Breathe Smell Relax</h2>
        
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample08">
          <ul className="spacerNav navbar-nav text-end">
            <li className="nav-item nav-link ">
              <a className="linkUnderline" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item nav-link">
              <a className="linkUnderline" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item nav-link">
              <a className="linkUnderline" href="#">
                Galería
              </a>
            </li>
            <li className="nav-item nav-link">
              <a className="linkUnderline" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
