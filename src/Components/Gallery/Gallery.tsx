import "./Gallery.css";

type Props = {
  imageG: string;
  onClick: () => void;
};

export default function Gallery({
  imageG,
  onClick,
}: Props) {
  return (
    <div>
      <div className="card">
        <img
          src={imageG}
          alt="Gallery item"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={onClick}
          className="gallery-image"
        />
      </div>
    </div>
  );
}
