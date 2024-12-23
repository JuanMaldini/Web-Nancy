import Spacebar from "../Spacebar/Spacebar";
import "./Faq.css";
import "../A-Helpers/Helper.css";

type Props = {};

export default function Faq({}: Props) {
  return (
    <div id="Faq" className="bodyFaq">
      <div className="text-center fs-1">
        <p>Preguntas Frecuentes</p>
      </div>

      <div className="accordion " id="accordionExample">
        <Spacebar />

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Haces envíos a todo el país?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Claro!</strong> Esta será la mejor manera de llegar a
              todos los destinos y que podamos disfrutar de la bella decoración!
            </div>
          </div>
        </div>

        <Spacebar />

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Cómo obtengo los prodcutos?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Me enviarás dirección!</strong> Una vez realizado el pago,
              coordinaremos el envío de para que te llegue de la mejor manera a
              tu domicilio.
            </div>
          </div>
        </div>

        <Spacebar />

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              className. It is shown by default, until the collapse plugin adds
              the appropriate className.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
