import "./Modal.css";

type Props = {
  objectName: string;
  productDescription: string;
  image1: string;
  image2: string;
  price: string;
  Pdatabstoggle: string;
  Pdatabstarget: string;
};

export default function Modal({
  image1,
  image2,
  objectName,
  // productDescription,
  price,
  // Pdatabstoggle,
  // Pdatabstarget,
}: Props) {
  return (
    <div className="modal fade" id="productModal" tabIndex={-1} aria-labelledby="productModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="productModalLabel">{objectName}</h5>
            
            <p className="card-text">$ {price} ARS</p>

            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div id={`carousel-${objectName}`} className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${objectName}`} data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span></button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${objectName}`} data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span></button>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
