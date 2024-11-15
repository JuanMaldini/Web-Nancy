type Props = {};
import Logo from "../assets/Icons/Logo/Logo01.png";
import Corazon from "../assets/Icons/Logo/Corazon.png"

export default function Navbar({}: Props) {
  return (
    //<nav className="navbar navbar-expand-md navbar-dark bg-dark d-flex flex-column text-white" aria-label="Tenth navbar example">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark d-flex flex-column text-white" aria-label="Tenth navbar example">
      <div>
        <ul className="list-unstyled d-flex flex-column text-center p-0 m-0">
          <li>
            <img src={Logo} alt="Logo Web" width="250"></img>
            <p>Breathe Smell Relax</p>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <img src={Corazon} alt="Logo Web" width="30" />
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
          <ul className="navbar-nav text-end ">
            <li className="nav-item nav-link ">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
              href="#">Inicio</a>
            </li>
            <li className="nav-item nav-link">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
              href="#">Productos</a>
            </li>
            <li className="nav-item nav-link">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
              href="#">Galería</a>
            </li>
            <li className="nav-item nav-link">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
              href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}