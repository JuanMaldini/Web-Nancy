import "./Contact.css";
import Button from "../Button/ButtonImg.tsx";

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className="bodyContact">
      <div className="container" id="featured-3">
          <h2 className="pb-2 ">Estemos en contacto!</h2>

          <div className="spacerArea"></div>

          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                </div>
                <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" className="icon-link">Call to action</a>
            </div>

            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                </div>
                <p>Un texto para llamar la atencion de los clientes, ofrecerles algunos servicios, asistencia, comentarios o difrentes propuestas</p>
                <Button destination="http://wa.me/5491135578288" buttonClass="Class1" textButton="Whatsapp"/>
            </div>

          </div>
      </div>
    </div>
  )
}