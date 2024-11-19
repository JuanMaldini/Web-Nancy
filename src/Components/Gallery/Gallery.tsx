import "./Gallery.css"

type Props = {
  imageG: string,
}

export default function Gallery({imageG}: Props) {
  return (
    <div>
      <div className="card">
        <img src={imageG}/>
      </div>
    </div>
  )
}