import "./Gallery.css";

type Props = {
  imageG: string;
  databstoggle: string;
  databstarget: string;
  onClick: () => void;
};

export default function Gallery({
  imageG,
  databstoggle,
  databstarget,
  onClick,
}: Props) {
  return (
    <div>
      <div className="card">
        <img
          src={imageG}
          alt="Gallery item"
          data-bs-toggle={databstoggle}
          data-bs-target={databstarget}
          onClick={onClick}
          className="gallery-image"
        />
      </div>
    </div>
  );
}
