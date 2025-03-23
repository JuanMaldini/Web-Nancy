import { FaWhatsapp } from "react-icons/fa";
import "./Taller.css";
import { getWhatsappContactTaller } from "../A-Helpers/Helper";
import "../A-Helpers/Helper.css"
import { useState } from "react";

export type TallerProp = {
  label: string;
  tallerDescriptionTag: string;
  tallerDescriptionGeneral?: string;
  price: string;
  imageTaller01: string;
  imageTaller02?: string;
  imageTaller03?: string;
  imageTaller04?: string;
  imageTaller05?: string;
  imageTaller06?: string;
  imageTaller07?: string;
  imageTaller08?: string;
  imageTaller09?: string;
  imageTaller10?: string;
  onClick?: () => void;
};

export default function CardTaller({
  label,
  tallerDescriptionTag,
  //tallerDescriptionGeneral,
  price,
  imageTaller01,
  imageTaller02,
  imageTaller03,
  imageTaller04,
  imageTaller05,
  imageTaller06,
  imageTaller07,
  imageTaller08,
  imageTaller09,
  imageTaller010,
  onClick,
}: TallerProp) {

  const images = [imageTaller01, imageTaller02, imageTaller03, imageTaller04, imageTaller05, imageTaller06, imageTaller07, imageTaller08, imageTaller09, imageTaller010]

  const [selectedProduct, setSelectedProduct] = useState<{
    label:string;
    productDescriptionTal: string;
    productDescriptionGenetal?: string;
    price: string;
    imageTaller01: string;
    imageTaller02: string;
    imageTaller03: string;
    imageTaller04: string;
    imageTaller05: string;
    imageTaller06: string;
    imageTaller07: string;
    imageTaller08: string;
    imageTaller09: string;
    imageTaller010: string;
  } | null>(null);


  return (

        <div className="cardCurso cardGeneral" onClick={onClick}>
          <div className="cardCursosImg">
            <img src={imageTaller01} className="img-curso" alt={`alt ${imageTaller01}`}/>
          </div>
          <div className="cardCursosData">
            <div className="card-bodyCurso">
              <div>
                <div className="card-titleCurso">{label}</div>
              </div>
              <div className="tagCurso">
                {tallerDescriptionTag.split(" ").map((word, index) => (
                  <div key={index} className="Class2">{word}</div>
                ))}
              </div>
              <div className="priceClassCurso">
                <div>{price}</div>
              </div>
              <div className="cardlinksCurso">
                <div className="Class1 CursosButton">Ver más</div>
                <a className="whatsappIcon" href={getWhatsappContactTaller(label)} target="_blank"><FaWhatsapp className="" style={{ color: "#25D366" }} /></a>
              </div>
            </div>
          </div>
        </div>
  );
}