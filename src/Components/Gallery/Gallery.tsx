import "./Gallery.css";

type Props = {
  imageG: string;
  databstoggle: string;
  databstarget: string;
  onClick: () => void; // Prop para manejar el clic dinámico
};

export default function Gallery({ imageG, databstoggle, databstarget, onClick }: Props) {
  return (
    <div>
      <div className="card">
        <img
          src={imageG}
          alt="Gallery item" // Agregado para accesibilidad
          data-bs-toggle={databstoggle}
          data-bs-target={databstarget}
          onClick={onClick} // Conexión dinámica con el evento
          className="gallery-image" // Clase opcional para estilizado adicional
        />
      </div>
    </div>
  );
}
