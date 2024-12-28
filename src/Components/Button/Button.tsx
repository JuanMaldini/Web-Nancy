import "./Button.css";
import "../A-Helpers/Helper.css";

export type ButtonProps = {
  textButton: string;
  buttonClass?: string;
  onClick?: () => void;
  destination?: string; // URL si es un enlace
  target?: "_blank" | "_self";
};

export default function Button({
  textButton,
  buttonClass = "",
  onClick,
  destination,
  target = "_self",
}: ButtonProps) {
  return destination ? (
    <a href={destination} className={buttonClass} target={target}>
      {textButton}
    </a>
  ) : (
    <button type="button" className={buttonClass} onClick={onClick}>
      {textButton}
    </button>
  );
}
