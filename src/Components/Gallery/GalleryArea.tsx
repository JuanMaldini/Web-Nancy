import Gallery from "./Gallery"
import {
  Flor1A,

} from "./ABarrelGallery";

type Props = {}

export default function ProductsArea({}: Props) {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <Gallery imageG={Flor1A}/>

        </div>
      </div>
    </div>
  )
}