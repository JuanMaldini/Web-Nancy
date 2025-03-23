import dataTaller from "./dataTaller.ts";
import CardTaller from "./CardTaller.tsx";
import Spacebar from "../Spacebar/Spacebar.tsx";
import { talleresText } from "../A-Helpers/Helper.tsx";
import { useState } from "react";
import ModalTaller from "../Modal/ModalTaller.tsx";

type Props = {};

export default function CursosArea({}: Props) {
  const [selectedTaller, setSelectedTaller] = useState<{
    label: string;
    tallerDescriptionTag: string;
    tallerDescriptionGeneral?: string;
    image01: string;
    image02?: string;
    image03?: string;
    image04?: string;
    image05?: string;
    image06?: string;
    image07?: string;
    image08?: string;
    image09?: string;
    image010?: string;
    price: string;
  } | null>(null);

  return (
    <div id="CursosArea" className="productsArea">
      <div className="spacingArea">
        <div className="text-center">
          <p className="fs-2">Talleres</p>
          <p className="fs-5">{talleresText}</p>
        </div>
        <Spacebar />
        <div className="productsAreaProd">
          {dataTaller.map((item, index) => (
            <CardTaller
              key={index}
              label={item.label}
              tallerDescriptionTag={item.tallerDescriptionTag}
              tallerDescriptionGeneral={item.tallerDescriptionGeneral}
              image01={item.image01}
              image02={item.image02}
              image03={item.image03}
              image04={item.image04}
              image05={item.image05}
              image06={item.image06}
              image07={item.image07}
              image08={item.image08}
              image09={item.image09}
              image010={item.image010}
              price={item.price}
              onClick={() => setSelectedTaller(item)}
            />
          ))}
        </div>
        {selectedTaller && (
          <ModalTaller
            label={selectedTaller.label}
            tallerDescriptionTag={selectedTaller.tallerDescriptionTag}
            tallerDescriptionGeneral={selectedTaller.tallerDescriptionGeneral}
            image01={selectedTaller.image01}
            image02={selectedTaller.image02}
            image03={selectedTaller.image03}
            image04={selectedTaller.image04}
            image05={selectedTaller.image05}
            image06={selectedTaller.image06}
            image07={selectedTaller.image07}
            image08={selectedTaller.image08}
            image09={selectedTaller.image09}
            image010={selectedTaller.image010}
            price={selectedTaller.price}
            onClose={() => setSelectedTaller(null)}
          />
        )}
      </div>
    </div>
  );
}
