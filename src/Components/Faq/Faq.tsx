import Spacebar from "../Spacebar/Spacebar";
import "./Faq.css";
import "../A-Helpers/Helper.css";

import { faqs } from '../A-Helpers/Helper.tsx'; // Ajusta la ruta según corresponda

type Props = {};

export default function Faq({}: Props) {
  // Función para renderizar dinámicamente las preguntas frecuentes
  const renderFaqItems = () => {
    const faqKeys = Object.keys(faqs); // Obtiene todas las claves de `faqs`
    const faqItems = [];

    for (let i = 1; i <= faqKeys.length / 2; i++) {
      const questionKey = `faq${String(i).padStart(2, '0')}A`; // Pregunta
      const answerKey = `faq${String(i).padStart(2, '0')}B`;   // Respuesta
    
      // Verificar que ambos (A y B) existen antes de renderizar
      if (faqs[questionKey] && faqs[answerKey]) {
        faqItems.push(
          <div className="p-1" key={i}> {/* Añade "key" aquí */}
          <div className="d-flex justify-content-center">
            <Spacebar/>
          </div>
          <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded="false" aria-controls={`collapse${i}`}>
                  {faqs[questionKey]} {/* Título de la pregunta */}
                </button>
              </h2>
              <div id={`collapse${i}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {faqs[answerKey]} {/* Respuesta */}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return faqItems;
  };

  return (
    <div id="Faq" className="bodyFaq">
      <div className="text-center fs-1">
        <p>Preguntas Frecuentes</p>
      </div>
      <div className="accordion" id="accordionExample">
        {renderFaqItems()}
      </div>
    </div>
  );
}