// GradePersonagens.componente.tsx
import React, { FC } from 'react';
import CardPersonagem from "./card-personagem.componente";
import { IPersonagem } from "../../redux/types";
import "./grade-personagem.css";

interface IGradePersonagensProps {
  personagens?: IPersonagem[];
  favoritos: IPersonagem[];
  adicionarFavorito: (personagem: IPersonagem) => void;
  removerFavorito: (personagem: IPersonagem) => void;
}

const GradePersonagens: FC<IGradePersonagensProps> = ({ 
  personagens, 
  favoritos = [], 
  adicionarFavorito, 
  removerFavorito 
}) => {
  if (!personagens || personagens.length === 0) {
    return <div>Nenhum personagem encontrado.</div>;
  }

  return (
    <div className="grade-personagens">
      {personagens.map((personagem) => {
        const isFavorito = favoritos.some(fav => fav.id === personagem.id);

        return (
          <CardPersonagem 
            key={personagem.id}
            personagem={personagem} 
            isFavorito={isFavorito} 
            toggleFavorito={() => {
              if (isFavorito) {
                removerFavorito(personagem);
              } else {
                adicionarFavorito(personagem);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default GradePersonagens;
