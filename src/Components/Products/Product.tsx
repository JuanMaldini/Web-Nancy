import Button from "../Button/Button.tsx";
import "./Product.css";

type Props = {
  objectName: string;
  productDescription: string;
  image1: string;
  image2: string;
  price: string;
  Pdatabstoggle: string;
  Pdatabstarget: string;
};

export default function Products({
  image1,
  image2,
  objectName,
  productDescription,
  price,
  Pdatabstoggle,
  Pdatabstarget,
}: Props) {
  return (
    <div className="cardProduct m-1">
      <div id={`carouselExample-${objectName.replace(/ /g, "_")}`} className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active my-2">
            <img src={image1} className="d-block w-100" alt="Imagen 1 de producto"/>
          </div>

          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Imagen 2 de producto"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample-${objectName.replace(/ /g, "_")}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample-${objectName.replace(/ /g, "_")}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card-body">
        <h5 className="card-title my-2">{objectName}</h5>

        <div className="d-flex align-items-center justify-content-start">
          <Button destination={""} buttonClass="Class2 my-2" textButton={productDescription} databstoggle={""} databstarget={""}/>
        </div>

        <p className="card-text my-2">$ {price} ARS</p>

        <div className="d-flex align-items-center justify-content-center">
          <Button destination={"#"} buttonClass="Class1  my-2" textButton="Ver mas" databstoggle={Pdatabstoggle} databstarget={Pdatabstarget} />
        </div>
      </div>
    </div>
  );
}
