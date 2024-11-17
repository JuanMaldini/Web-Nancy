import "./Description.css";
import Logo from "../../assets/Icons/Logo/Logo01.png";

type Props = {}

export default function Description({}: Props) {
  return (
    <div className="description">
      <div className="container">
        <div className="row pb-4  pt-4 align-items-center rounded-4 border shadow-lg">
          <div className="col-lg-7 p-4">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Hola a todos!</h1>
          <p className="lead">Aqui pondremos una breve descripcion acerca de mi experiencia, mi carrera y todos los projectos que estuve realizando</p>
          </div>
          <div className="descriptionImage col-lg-4 offset-lg-1 overflow-hidden shadow-lg">
              <img className="rounded-lg-3" src={Logo} alt="" width="400"/>
          </div>
        </div>
      </div>
    </div>
  )
}