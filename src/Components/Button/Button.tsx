import './Button.css'

type Props = {
    destination: string,
    textButton: string,
    buttonClass: string
}

export default function Button({destination, buttonClass, textButton}: Props) {
  return (
    <a href={destination} className={buttonClass}>{textButton}</a>
  )
}