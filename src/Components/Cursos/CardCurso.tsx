import { FaWhatsapp } from "react-icons/fa";
import "./Cursos.css";
import { getWhatsappContactCourse } from "../A-Helpers/Helper";
import "../A-Helpers/Helper.css"

export type CursoProp = {
  label: string;
  imageCurso: string;
  courseDescriptionTag: string;
  courseDescriptionGeneral?: string;
  price: string;
  onClick?: () => void;
};

export default function CardCurso({
  label,
  imageCurso,
  courseDescriptionTag,
  // courseDescriptionGeneral,
  onClick,
  price,
}: CursoProp) {
  return (

        <div className="cardCurso cardGeneral" onClick={onClick}>
          <div className="cardCursosImg">
            <img src={imageCurso} className="img-curso" alt={`alt ${imageCurso}`}/>
          </div>
          <div className="cardCursosData">
            <div className="card-bodyCurso">
              <div>
                <div className="card-titleCurso">{label}</div>
              </div>
              <div className="tagCurso">
                {courseDescriptionTag.split(" ").map((word, index) => (
                  <div key={index} className="Class2">{word}</div>
                ))}
              </div>
              <div className="priceClassCurso">
                <div>$ {price} ARS</div>
              </div>
              <div className="cardlinksCurso">
                <div className="Class1 CursosButton">Ver más</div>
                <a className="whatsappIcon" href={getWhatsappContactCourse(label)} target="_blank"><FaWhatsapp className="" style={{ color: "#25D366" }} /></a>
              </div>
            </div>
          </div>
        </div>
  );
}