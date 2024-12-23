import "./Contact.css";
import '../A-Helpers/Helper.css';
import Button from "../Button/ButtonImg.tsx";
import Spacebar from "../Spacebar/Spacebar.tsx";
import ContactImg from "../../assets/Icons/Logo/Logo01.png";
import { getWhatsappContact } from "../A-Helpers/Helper.tsx";

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className="bodyContactSection">
      <div className="bodyContact">
            <h2>Estemos en contacto!</h2>
            <Spacebar/>
            <div className="bodyContactItem align-items-center g-4 p-5">

              <div className="feature col contactImg">
                <img src={ContactImg} alt="Image for Contact" width="300"/>
              </div>

              <div className="feature col">
                  <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                  <p>Un texto para llamar la atencion de los clientes, ofrecerles algunos servicios, asistencia, comentarios o difrentes propuestas</p>
                  <Button destination={getWhatsappContact()} buttonClass="Class1" textButton="Whatsapp"/>
              </div>
            </div>
      </div>
    </div>
  )
}