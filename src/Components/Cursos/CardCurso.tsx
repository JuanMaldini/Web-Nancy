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
  courseDescriptionGeneral,
  onClick,
  price,
}: CursoProp) {
  return (

        <div className="cardCurso cardGeneral">

          <div className="cardCursosImg">
            <img src={imageCurso} className="img-curso" alt={`alt ${imageCurso}`}/>
          </div>

          <div className="cardCursosData">
            <div className="card-bodyCurso">
              <div>
                <p className="card-titleCurso">{label}</p>
              </div>

              <div className="tagCurso">
                {courseDescriptionTag.split(" ").map((word, index) => (
                  <div key={index} className="Class2">{word}</div>
                ))}
              </div>

              <div className="priceClassCurso">
                <p className="m-0">$ {price} ARS</p>
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


{/* 
<div className="cardCourse">
      

  <div className="cardProductImg">
    <img className="course-img" src={imageCurso} alt={`alt ${imageCurso}`}/>
  </div>

  <div className="couseData">
    <div className="card-body-course">
      <div>
        <p className="card-title">{label}</p>
      </div>
      <div className="tagClass">
        {courseDescriptionTag.split(" ").map((word, index) => (
          <div key={index} className="Class2">{word}</div>
        ))}
      </div>
      <div className="priceClass">
        <p>$ {price} ARS</p>
      </div>
    </div>

    <div className="cardCourselinks">
      <div className="Class1 productButton">Ver más</div>
      <a className="whatsappIcon" href={getWhatsappContactCourse(label)} target="_blank"><FaWhatsapp style={{ color: "#25D366" }} /></a>
    </div>
  </div>
</div>
*/}