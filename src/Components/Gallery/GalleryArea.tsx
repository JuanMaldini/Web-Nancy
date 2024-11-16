import Gallery from "./Gallery"
import {
  Flor1A,
  /*
  Flor1B,
  Flor2A,
  Flor2B,
  Flor3A,
  Flor3B,
  Flor4A,
  Flor4B,
  */
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