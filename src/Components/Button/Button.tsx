import "./Button.css";
import "../A-Helpers/Helper.css";

type Props = {
  destination?: string;
  textButton: string;
  buttonClass: string;
  onClick?: () => void; // Agrega la propiedad onClick
};

export default function Button({
  destination,
  buttonClass,
  textButton,
  onClick,
}: Props) {
  return onClick ? (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
    >
      {textButton}
    </button>
  ) : (
    <a href={destination} className={buttonClass}>
      {textButton}
    </a>
  );
}
