import "./Gallery.css";
import "../A-Helpers/Helper.css";

type Props = {
  imageG: string;
  onClick?: () => void;
};

export default function Gallery({ imageG, onClick }: Props) {
  return (
    <img 
        src={imageG}
        alt="Gallery item"
        onClick={onClick}
        className="card cardGeneral"
      />
  );
}
