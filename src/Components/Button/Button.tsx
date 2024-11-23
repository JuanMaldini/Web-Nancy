import "./Button.css";
import "../A-Helpers/Helper.css";

type Props = {
  destination: string;
  textButton: string;
  buttonClass: string;
  databstoggle: string;
  databstarget: string;
};

export default function Button({
  destination,
  buttonClass,
  textButton,
  databstoggle,
  databstarget,
}: Props) {
  return (
    <a
      href={destination}
      className={buttonClass}
      data-bs-toggle={databstoggle}
      data-bs-target={databstarget}
    >
      {textButton}
    </a>
  );
}
