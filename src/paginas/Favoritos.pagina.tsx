// PaginaFavoritos.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { carregarFavoritos, adicionarFavorito, removerFavorito, limparFavoritos } from '../redux/favoritosSlice';
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { RootState } from '../redux/store'; 

const PaginaFavoritos = () => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state: RootState) => state.favoritos);

  useEffect(() => {
    dispatch(carregarFavoritos());
  }, [dispatch]);

  const handleLimparFavoritos = () => {
    dispatch(limparFavoritos());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger" onClick={handleLimparFavoritos}>Remover tudo</button>
      </div>
      <GradePersonagens 
        personagens={favoritos} 
        favoritos={favoritos} 
        adicionarFavorito={(personagem) => dispatch(adicionarFavorito(personagem))}
        removerFavorito={(personagem) => dispatch(removerFavorito(personagem))}
      />
    </div>
  );
};

export default PaginaFavoritos;
