import "./Contact.css";
import Button from "../Button/ButtonImg.tsx";
import Spacebar from "../Spacebar/Spacebar.tsx";
import ContactImg from "../../assets/Icons/Logo/Logo01.png";

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className="bodyContact pt-2 pb-4 m-0">
      <div className="container" id="featured-3">
          <h2>Estemos en contacto!</h2>
          <Spacebar/>
          <div className="d-flex align-items-center g-4 py-5 row-col-2 row-col-2">

            <div className="feature col">
              <img src={ContactImg} alt="Image for Contact" width="300"/>
            </div>

            <div className="feature col">
                <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                <p>Un texto para llamar la atencion de los clientes, ofrecerles algunos servicios, asistencia, comentarios o difrentes propuestas</p>
                <Button destination="http://wa.me/5491135578288" buttonClass="Class1" textButton="Whatsapp"/>
            </div>
          </div>
      </div>
    </div>
  )
}