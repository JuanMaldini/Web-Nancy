import "./Modal.css";

type Props = {
  imageG: string;
};

function ModalGallery({ imageG }: Props) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            </button>
          </div>
          <div className="modal-body">
            <img src={imageG} alt="Selected item" className="img-fluid" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" ata-bs-dismiss="modal"> Close </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalGallery;
