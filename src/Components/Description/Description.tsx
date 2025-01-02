import "./Description.css";
import "../A-Helpers/Helper.css";
import imgCol01 from "../../assets/Fotos/Profile.jpg";
import imgColumn03 from "../../assets/Fotos/Mate/IMG-20241121-WA0022.jpg";
import descriptionBackground from "../../assets/Fotos/Galeria/IMG-20241121-WA0036.jpg";
import { descriptionText1, descriptionText2, descriptionText3 } from "../A-Helpers/Helper";
  
type Props = {};

export default function Description({}: Props) {  

  return (
    <div className="descriptionBG">
      <div className="description">
        <img src={descriptionBackground} alt=""/>
        <div className="descriptionCol01">
          <img className="descriptionCol01Image" src={imgCol01} alt="Nancy imagen" />
        </div>
        <div className="descriptionCol02">
          <ul  className="descriptionCol02UL">
            <li className="descriptionCol02A">Hola soy Nancy 👋 </li>
            <li className="descriptionCol02B">{descriptionText1}</li>
            <li className="descriptionCol02B">{descriptionText2}</li>
            <li className="descriptionCol02B">{descriptionText3}</li>
          </ul>
        </div>
        <div className="descriptionCol03">
          <img className="descriptionCol03Image" src={imgColumn03} alt="imagen de trabajos" />
        </div>
      </div>
    </div>
  );
}
