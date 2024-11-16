import Button from "../Button/Button.tsx";

type Props = {
  Id: number;
  productName: string;
  productDescription: string;
  image1: string;
  image2: string;
  price: string;
  productPath: string;
};

export default function Products({
  Id,
  image1,
  image2,
  productName,
  productDescription,
  price,
  productPath,
}: Props) {
  const carouselId = `carouselExampleIndicators-${Id}`;

  return (
    <div className="card d-flex flex-col ">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <div className="d-flex align-items-center justify-content-start">
          <Button
            destination={productPath}
            buttonClass="Class2"
            textButton={productDescription}
          />
        </div>
        <p className="card-text">$ {price} ARS</p>
        <div className="d-flex align-items-center justify-content-center">
          <Button
            destination={productPath}
            buttonClass="Class1"
            textButton="Ver mas"
          />
        </div>
      </div>
    </div>
  );
}
