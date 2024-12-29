import dataCursos from "./dataCursos.ts";
import CardCurso from "./CardCurso.tsx";
import Spacebar from "../Spacebar/Spacebar.tsx";
import { cursosText } from "../A-Helpers/Helper.tsx";
import { useState } from "react";
import ModalCourse from "../Modal/ModalCourse.tsx";

type Props = {};

export default function CursosArea({}: Props) {
  const [selectedCurso, setSelectedCurso] = useState<{
    label: string;
    courseDescriptionTag: string;
    courseDescriptionGeneral?: string;
    imageCurso: string;
    price: string;
  } | null>(null);

  return (
    <div id="CursosArea" className="productsArea">
      <div className="spacingArea">
        <div className="text-center">
          <p className="fs-2">Cursos</p>
          <p className="fs-5">{cursosText}</p>
        </div>
        <Spacebar />
        <div className="productsAreaProd">
          {dataCursos.map((item, index) => (
            <CardCurso
              key={index}
              label={item.label}
              courseDescriptionTag={item.courseDescriptionTag}
              courseDescriptionGeneral={item.courseDescriptionGeneral}
              imageCurso={item.imageCurso}
              price={item.price}
              onClick={() => setSelectedCurso(item)}
            />
          ))}
        </div>
        {selectedCurso && (
          <ModalCourse
            label={selectedCurso.label}
            courseDescriptionTag={selectedCurso.courseDescriptionTag}
            courseDescriptionGeneral={selectedCurso.courseDescriptionGeneral}
            imageCurso={selectedCurso.imageCurso}
            price={selectedCurso.price}
            onClose={() => setSelectedCurso(null)}
          />
        )}
      </div>
    </div>
  );
}
