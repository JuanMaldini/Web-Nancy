import "./Description.css";
import "../A-Helpers/Helper.css";
import imgCol01 from "../../assets/Fotos/Galeria/IMG-20241121-WA0037.jpg";
import imgColumn03 from "../../assets/Fotos/Mate/IMG-20241121-WA0022.jpg";
import descriptionBackground from "../../assets/Fotos/Galeria/IMG-20241121-WA0036.jpg";
  
type Props = {};

export default function Description({}: Props) {
  return (
    <div className="description">
      <img src={descriptionBackground} alt=""/>
      <div className="descriptionCol01">
        <img className="descriptionCol01Image" src={imgCol01} alt="Nancy imagen" />
      </div>
      <div className="descriptionCol02">
        <p className="descriptionCol02A">Soy Nancy</p>
        <p className="descriptionCol02B">Lorem ipsum dolor sit amet, consectetur  Duis eu purus vel tortor fermentum lacinia. Duis vel commodo nunc. Mauris dictum erat ipsum, et finibus augue volutpat in. Sed mattis ac neque porttitor consequat. In ac augue varius, ultricies quam ac, sollicitudin mauris. Sed pretium in nisl eu consectetur. Nam quis elementum augue, in auctor erat. Praesent sed eros at orci lobortis rhoncus nec id nibh. Sed ante est, iaculis ut nisl a, efficitur maximus lorem.</p>
      </div>
      <div className="descriptionCol03">
        <img className="descriptionCol03Image" src={imgColumn03} alt="imagen de trabajos" />
      </div>
    </div>
  );
}
