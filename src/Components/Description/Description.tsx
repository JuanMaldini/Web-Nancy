import "./Description.css";
import Logo from "../../assets/Icons/Logo/Logo01.png";

type Props = {};

export default function Description({}: Props) {
  return (
    <div className="description m-0 p-3">
      <div className="container">
        <div className="descriptionCard ">
          <div className="col-lg-7 p-4">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Hola a todos!
            </h1>
            <p className="lead">
              Aqui pondremos una breve descripcion acerca de mi experiencia, mi
              carrera y todos los projectos que estuve realizando
            </p>
          </div>
          <div className="descriptionImage col-lg-4 offset-lg-1 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={Logo} alt="" width="400" />
          </div>
        </div>
      </div>
    </div>
  );
}
