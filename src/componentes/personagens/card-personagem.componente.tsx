// Em card-personagem.componente.tsx
import React, { FC } from 'react';
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

import { IPersonagem } from "../../redux/types";

interface ICardPersonagemProps {
  personagem: IPersonagem;
  isFavorito: boolean;
  toggleFavorito: () => void;
}

const CardPersonagem: FC<ICardPersonagemProps> = ({ personagem, isFavorito, toggleFavorito }) => {
  return (
    <div className="card-personagem">
      <img
        src={personagem.image}
        alt={personagem.name}
      />
      <div className="card-personagem-body">
        <span>{personagem.name}</span>
        <BotaoFavorito 
          isFavorito={isFavorito} 
          toggleFavorito={toggleFavorito}
        />
      </div>
    </div>
  );
};

export default CardPersonagem;
