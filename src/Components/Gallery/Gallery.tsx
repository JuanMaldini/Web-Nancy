type Props = {
  imageG: string,
}

export default function Gallery({imageG}: Props) {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src={imageG}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}