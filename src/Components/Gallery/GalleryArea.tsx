import Gallery from "./Gallery"
import "./GalleryArea.css";
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
    <div className="bodyGalleryArea">
      <div className="container">
        <div className="row row-cols-sm-3 row-cols-sm-3 row-cols-sm-3 g-3 my-2">
          <Gallery imageG={Flor1A}/>
          <Gallery imageG={Flor1A}/>
          <Gallery imageG={Flor1A}/>
          <Gallery imageG={Flor1A}/>
        </div>
      </div>
    </div>
  )
}