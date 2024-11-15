import Gallery from "./Gallery.tsx"
import ABarrelGallery from "./ABarrelGallery.tsx"

type Props = {}

export default function ProductsArea({}: Props) {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <Gallery imageG="../assets/Icons/autocad.png"/>

        </div>
      </div>
    </div>
  )
}